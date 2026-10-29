import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Template } from '../../types/domain';
import { request } from '../../lib/bridge';
import { extractVariables, renderTemplate, validateTemplateVariables } from '../../lib/templateVars';

/**
 * Templates: local reusable message templates with categories, tags, search,
 * duplication, delete, variable validation and preview. Stored only in IndexedDB.
 */

const SAMPLE_VARS: Record<string, string> = {
  name: 'Alex Doe',
  company: 'Acme Ltd',
  phone: '+14155550101',
};

interface EditorState {
  id: string;
  name: string;
  body: string;
  category: string;
  tags: string; // comma separated in the UI
}

function blankEditor(): EditorState {
  return { id: crypto.randomUUID(), name: '', body: '', category: 'General', tags: '' };
}

export function TemplatesScreen() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('all');
  const [editor, setEditor] = useState<EditorState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const refresh = useCallback(async () => {
    try {
      setTemplates(await request<Template[]>({ type: 'template/list' }));
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const categories = useMemo(
    () => [...new Set(templates.map((t) => t.category))].sort(),
    [templates],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return templates.filter((t) => {
      if (category !== 'all' && t.category !== category) return false;
      if (!q) return true;
      return (
        t.name.toLowerCase().includes(q) ||
        t.body.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
  }, [templates, query, category]);

  const editorVars = editor ? extractVariables(editor.body) : [];
  const editorMissing = editor ? validateTemplateVariables(editor.body, Object.keys(SAMPLE_VARS)).missing : [];
  const editorPreview = editor ? renderTemplate(editor.body, SAMPLE_VARS).text : '';

  const save = async () => {
    if (!editor) return;
    if (!editor.name.trim() || !editor.body.trim()) {
      setError('Name and body are required.');
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const existing = templates.find((t) => t.id === editor.id);
      const now = Date.now();
      const tpl: Template = {
        id: editor.id,
        name: editor.name.trim(),
        body: editor.body,
        category: editor.category.trim() || 'General',
        tags: editor.tags
          .split(',')
          .map((s) => s.trim().toLowerCase())
          .filter(Boolean),
        createdAt: existing?.createdAt ?? now,
        updatedAt: now,
      };
      await request({ type: 'template/save', template: tpl });
      setNotice(`Template “${tpl.name}” saved locally.`);
      setEditor(null);
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };

  const duplicate = async (t: Template) => {
    const copy: Template = { ...t, id: crypto.randomUUID(), name: `${t.name} (copy)`, createdAt: Date.now(), updatedAt: Date.now() };
    await request({ type: 'template/save', template: copy });
    setNotice(`Duplicated “${t.name}”.`);
    await refresh();
  };

  const remove = async (t: Template) => {
    if (!window.confirm(`Delete template “${t.name}”? This cannot be undone.`)) return;
    await request({ type: 'template/delete', id: t.id });
    setNotice(`Deleted “${t.name}”.`);
    await refresh();
  };

  return (
    <div>
      {error && <div className="rc-alert rc-alert-danger" role="alert">{error}</div>}
      {notice && <div className="rc-alert rc-alert-info" role="status">{notice}</div>}

      <section className="rc-card">
        <div className="rc-row" style={{ justifyContent: 'space-between' }}>
          <h2 style={{ margin: 0 }}>Local templates</h2>
          <button className="rc-btn rc-btn-primary" onClick={() => { setEditor(blankEditor()); setError(null); setNotice(null); }}>
            New template
          </button>
        </div>
        <p className="rc-devices-note">Templates never leave this device. Variables use {'{{field}}'} syntax and are validated against your imported columns at send time.</p>
        <div className="rc-row">
          <input
            className="rc-input"
            style={{ flex: 2 }}
            type="search"
            aria-label="Search templates"
            placeholder="Search name, body or tag…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select className="rc-select" style={{ flex: 1 }} aria-label="Filter by category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">All categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </section>

      {editor && (
        <section className="rc-card" aria-label="Template editor">
          <h3>{templates.some((t) => t.id === editor.id) ? 'Edit template' : 'New template'}</h3>
          <div className="rc-grid-2">
            <div>
              <label className="rc-label" htmlFor="tpl-name">Name *</label>
              <input id="tpl-name" className="rc-input" value={editor.name} onChange={(e) => setEditor({ ...editor, name: e.target.value })} />
            </div>
            <div>
              <label className="rc-label" htmlFor="tpl-cat">Category</label>
              <input id="tpl-cat" className="rc-input" list="tpl-cats" value={editor.category} onChange={(e) => setEditor({ ...editor, category: e.target.value })} />
              <datalist id="tpl-cats">
                {categories.map((c) => (<option key={c} value={c} />))}
              </datalist>
            </div>
          </div>
          <label className="rc-label" htmlFor="tpl-tags">Tags (comma separated)</label>
          <input id="tpl-tags" className="rc-input" value={editor.tags} placeholder="followup, promo" onChange={(e) => setEditor({ ...editor, tags: e.target.value })} />
          <label className="rc-label" htmlFor="tpl-body">Body *</label>
          <textarea id="tpl-body" className="rc-textarea" rows={4} value={editor.body} onChange={(e) => setEditor({ ...editor, body: e.target.value })} />
          {editorVars.length > 0 && (
            <p className="rc-devices-note">
              Variables: {editorVars.map((v) => `{{${v}}}`).join(', ')}
              {editorMissing.length > 0 && (
                <> — <span style={{ color: 'var(--rc-warn)' }}>not in sample fields: {editorMissing.join(', ')}</span> (they will resolve if you import a matching column)</>
              )}
            </p>
          )}
          {!editor.body.trim() ? (
            <div className="rc-empty">Type a body to see the preview.</div>
          ) : (
            <div>
              <h4>Preview (sample contact)</h4>
              <div className="rc-preview-bubble">{editorPreview || <em>(empty)</em>}</div>
            </div>
          )}
          <div className="rc-row" style={{ marginTop: 8 }}>
            <button className="rc-btn" onClick={() => setEditor(null)}>Cancel</button>
            <button className="rc-btn rc-btn-primary" disabled={busy} onClick={() => void save()}>Save template</button>
          </div>
        </section>
      )}

      <section className="rc-card">
        {filtered.length === 0 ? (
          <div className="rc-empty">
            {templates.length === 0 ? 'No templates yet — create one to reuse across campaigns.' : 'No templates match your search.'}
          </div>
        ) : (
          <table className="rc-table">
            <thead>
              <tr><th>Name</th><th>Category</th><th>Tags</th><th>Updated</th><th aria-label="Actions" /></tr>
            </thead>
            <tbody>
              {filtered.map((t) => (
                <tr key={t.id}>
                  <td>{t.name}</td>
                  <td><span className="rc-badge">{t.category}</span></td>
                  <td className="rc-devices-note">{t.tags.join(', ')}</td>
                  <td>{new Date(t.updatedAt).toLocaleDateString()}</td>
                  <td>
                    <div className="rc-row">
                      <button className="rc-btn" onClick={() => setEditor({ ...blankEditor(), ...t, tags: t.tags.join(', ') })} aria-label={`Edit ${t.name}`}>Edit</button>
                      <button className="rc-btn" onClick={() => void duplicate(t)} aria-label={`Duplicate ${t.name}`}>Duplicate</button>
                      <button className="rc-btn rc-btn-danger" onClick={() => void remove(t)} aria-label={`Delete ${t.name}`}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}
