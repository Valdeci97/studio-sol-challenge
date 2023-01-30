import { MIN_UPPERCASE } from './constants';

export function validateUppercase(pass: string, minChar: number = 0): string | null {
  const regex = `(?:.*[A-Z]){${minChar}}`;
  const upperRegex = new RegExp(regex, 'g');
  if (!upperRegex.test(pass)) return MIN_UPPERCASE;
  return null;
}
