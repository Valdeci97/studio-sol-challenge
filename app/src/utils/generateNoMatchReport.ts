import * as constants from './constants';
import { Args, Rules } from '../@types/reolvers/Args';
import { validateDigit } from './validateDigit';
import { validateLowercase } from './validateLowercase';
import { validateSize } from './validateSize';
import { validateSpecialCharacters } from './validateSpecialCharacters';
import { validateUppercase } from './validateUppecase';

type Finder = Rules | undefined;

type FoundRule = {
  minSize: Finder;
  minUpper: Finder;
  minLower: Finder;
  minDigit: Finder;
  minSpecial: Finder;
};

function findRule(rules: Rules[], comparator: string): Finder {
  const result = rules.find(({ rule }) => rule === comparator);
  return result;
}

function handleRules(args: Args): FoundRule {
  const minSize = findRule(args.rules, constants.MIN_SIZE);
  const minUpper = findRule(args.rules, constants.MIN_UPPERCASE);
  const minLower = findRule(args.rules, constants.MIN_LOWERCASE);
  const minDigit = findRule(args.rules, constants.MIN_DIGIT);
  const minSpecial = findRule(args.rules, constants.MIN_SPECIAL_CHARS);
  return { minSize, minUpper, minLower, minDigit, minSpecial };
}

function validateArgs(args: Args): (string | null)[] {
  const found = handleRules(args);
  const size = validateSize(args.password, found.minSize?.value);
  const upper = validateUppercase(args.password, found.minUpper?.value);
  const lower = validateLowercase(args.password, found.minLower?.value);
  const digit = validateDigit(args.password, found.minDigit?.value);
  const special = validateSpecialCharacters(args.password, found.minSpecial?.value);
  return [size, upper, lower, digit, special];
}

export function generateNoMatchReport(args: Args): (string | null)[] {
  const validated = validateArgs(args);
  const noMatch = validated.filter((element) => element);
  return noMatch;
}
