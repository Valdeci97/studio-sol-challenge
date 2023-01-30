export function validateLowercase(pass: string, minChar: number): string | null {
  const regex = `(?:.*[a-z]){${minChar}}`;
  const lowerRegex = new RegExp(regex, 'g');
  if (!lowerRegex.test(pass)) return 'minLowercase';
  return null;
}
