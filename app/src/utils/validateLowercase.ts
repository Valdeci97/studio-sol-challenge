import { MIN_LOWERCASE } from './constants';

export function validateLowercase(pass: string, minChar: number = 0): string | null {
  const regex = `(?:.*[a-z]){${minChar}}`;
  const lowerRegex = new RegExp(regex, 'g');
  if (!lowerRegex.test(pass)) return MIN_LOWERCASE;
  return null;
}
