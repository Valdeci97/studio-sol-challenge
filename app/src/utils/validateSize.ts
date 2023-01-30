import { MIN_SIZE } from './constants';

export function validateSize(pass: string, minLength: number = 0): string | null {
  if (pass.length < minLength) return MIN_SIZE;
  return null;
}
