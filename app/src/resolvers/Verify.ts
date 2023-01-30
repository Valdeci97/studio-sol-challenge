import { validateDigit } from '../utils/validateDigit';
import { validateLowercase } from '../utils/validateLowercase';
import { validateSize } from '../utils/validateSize';
import { validateSpecialCharacters } from '../utils/validateSpecialCharacters';
import { validateUppercase } from '../utils/validateUppecase';

type Rules = {
  rule: String;
  value: number;
};

type Args = {
  password: string;
  rules: Rules[];
};

export const resolvers = {
  Query: {
    verify: (_parents: any, args: Args) => {
      const { password, rules } = args;
      const minSize = validateSize(password, rules[0].value);
      const minUpper = validateUppercase(password, rules[1].value);
      const minLower = validateLowercase(password, rules[2].value);
      const minDigit = validateDigit(password, rules[3].value);
      const minSpecialChars = validateSpecialCharacters(password, rules[4].value);
      const noMatch = [minSize, minUpper, minLower, minDigit, minSpecialChars].filter(
        (rule) => rule,
      );
      const verify = noMatch.length === 0;
      return { verify, noMatch };
    },
  },
};
