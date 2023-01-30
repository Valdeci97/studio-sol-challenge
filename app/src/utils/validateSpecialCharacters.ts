export function validateSpecialCharacters(
  pass: string,
  minSpecialChar: number,
): string | null {
  const regex = `(?:.*[!@#$%^&*()-+\\/{}[\\]]){${minSpecialChar}}`;
  const specialCharRegex = new RegExp(regex, 'g');
  if (!specialCharRegex.test(pass)) return 'minSpecialChars';
  return null;
}
