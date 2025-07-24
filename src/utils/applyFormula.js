export function applyFormula(data, formulaText) {
  if (!formulaText.startsWith('=')) return data;
  const formula = formulaText.slice(1); // remove "="
  return data.map(row => {
    try {
      const expr = formula.replace(/\b[A-Za-z0-9_]+\b/g, key => row[key] ?? 0);
      return { ...row, Custom: eval(expr) };
    } catch {
      return { ...row, Custom: 'ERR' };
    }
  });
}
