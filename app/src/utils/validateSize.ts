export function validateSize(pass: string, minLength: number): string | null {
  if (pass.length < minLength) return 'minSize';
  return null;
}
