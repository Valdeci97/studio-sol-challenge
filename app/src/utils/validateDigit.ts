export function validateDigit(pass: string, minDigitLength: number): string | null {
  const regex = `(?:.*[\\d]){${minDigitLength}}`;
  const digitRegex = new RegExp(regex, 'g');
  if (!digitRegex.test(pass)) return 'minDigit';
  return null;
}
