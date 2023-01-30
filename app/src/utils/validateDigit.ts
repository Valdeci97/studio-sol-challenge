import { MIN_DIGIT } from './constants';

export function validateDigit(pass: string, minDigitLength: number = 0): string | null {
  const regex = `(?:.*[\\d]){${minDigitLength}}`;
  const digitRegex = new RegExp(regex, 'g');
  if (!digitRegex.test(pass)) return MIN_DIGIT;
  return null;
}
