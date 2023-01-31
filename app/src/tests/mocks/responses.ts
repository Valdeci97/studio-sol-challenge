const TYPE = 'single';
const BODY_OK = { verify: true, noMatch: [] };
const MIN_SIZE = { verify: false, noMatch: ['minSize'] };
const MIN_UPPERCASE = { verify: false, noMatch: ['minUppercase'] };
const MIN_LOWERCASE = { verify: false, noMatch: ['minLowercase'] };
const MIN_DIGIT = { verify: false, noMatch: ['minDigit'] };
const MIN_SPECIAL_CHARS = { verify: false, noMatch: ['minSpecialChars'] };
const ALL_CASES = {
  verify: false,
  noMatch: ['minSize', 'minUppercase', 'minLowercase', 'minDigit', 'minSpecialChars'],
};

export const graphqlResponse = {
  TYPE,
  BODY_OK,
  MIN_SIZE,
  MIN_UPPERCASE,
  MIN_LOWERCASE,
  MIN_DIGIT,
  MIN_SPECIAL_CHARS,
  ALL_CASES,
};
