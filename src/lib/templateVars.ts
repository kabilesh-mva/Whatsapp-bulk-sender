/**
 * Variable substitution for message bodies.
 * Syntax: {{fieldName}} — resolves against a contact's fields map (plus `phone`).
 * Unknown variables render as an empty string but are reported so the UI can warn.
 */

const VAR_RE = /\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g;

export interface RenderResult {
  text: string;
  /** variable names referenced in the template that had no value */
  unknownVariables: string[];
  usedVariables: string[];
}

export function extractVariables(template: string): string[] {
  const names = new Set<string>();
  for (const m of template.matchAll(VAR_RE)) names.add(m[1]);
  return [...names];
}

export function contactVariableMap(
  fields: Record<string, string>,
  phone?: string | null,
): Record<string, string> {
  const map: Record<string, string> = {};
  for (const [k, v] of Object.entries(fields)) map[k.toLowerCase()] = v ?? '';
  if (phone) map['phone'] = phone;
  return map;
}

export function renderTemplate(template: string, vars: Record<string, string>): RenderResult {
  const unknown = new Set<string>();
  const used = new Set<string>();
  const text = template.replace(VAR_RE, (_full, name: string) => {
    const key = name.toLowerCase();
    if (Object.prototype.hasOwnProperty.call(vars, key)) {
      used.add(name);
      return vars[key];
    }
    unknown.add(name);
    return '';
  });
  return { text, unknownVariables: [...unknown], usedVariables: [...used] };
}

/** Validate that every variable in a template exists in the available field set. */
export function validateTemplateVariables(
  template: string,
  availableFields: string[],
): { missing: string[] } {
  const avail = new Set(availableFields.map((f) => f.toLowerCase()));
  avail.add('phone');
  const missing = extractVariables(template).filter((v) => !avail.has(v.toLowerCase()));
  return { missing };
}
