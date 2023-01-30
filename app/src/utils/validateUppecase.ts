export function validateUppercase(pass: string, minChar: number): string | null {
  const regex = `(?:.*[A-Z]){${minChar}}`;
  const upperRegex = new RegExp(regex, 'g');
  if (!upperRegex.test(pass)) return 'minUppercase';
  return null;
}
