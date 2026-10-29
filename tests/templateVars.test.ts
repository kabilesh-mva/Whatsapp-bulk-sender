import { describe, it, expect } from 'vitest';
import { extractVariables, renderTemplate, contactVariableMap } from '../src/lib/templateVars';

describe('extractVariables', () => {
  it('finds unique variable names', () => {
    expect(extractVariables('Hi {{name}}, at {{company}}? Bye {{name}}!')).toEqual(['name', 'company']);
  });

  it('tolerates whitespace inside braces', () => {
    expect(extractVariables('Hello {{ name }}')).toEqual(['name']);
  });

  it('returns empty list for plain text', () => {
    expect(extractVariables('no variables here')).toEqual([]);
  });
});

describe('renderTemplate', () => {
  const vars = contactVariableMap({ name: 'Ada', company: 'Acme' }, '+14155550101');

  it('substitutes known variables case-insensitively', () => {
    const r = renderTemplate('Hi {{Name}} from {{COMPANY}}', vars);
    expect(r.text).toBe('Hi Ada from Acme');
    expect(r.unknownVariables).toEqual([]);
  });

  it('exposes the phone variable', () => {
    const r = renderTemplate('Call {{phone}}', vars);
    expect(r.text).toBe('Call +14155550101');
  });

  it('renders unknown variables as empty and reports them', () => {
    const r = renderTemplate('Hey {{nickname}}!', vars);
    expect(r.text).toBe('Hey !');
    expect(r.unknownVariables).toEqual(['nickname']);
  });
});
