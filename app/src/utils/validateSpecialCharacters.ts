import { MIN_SPECIAL_CHARS } from './constants';

export function validateSpecialCharacters(
  pass: string,
  minSpecialChar: number = 0,
): string | null {
  const regex = `(?:.*[!@#$%^&*()-+\\/{}[\\]]){${minSpecialChar}}`;
  const specialCharRegex = new RegExp(regex, 'g');
  if (!specialCharRegex.test(pass)) return MIN_SPECIAL_CHARS;
  return null;
}
