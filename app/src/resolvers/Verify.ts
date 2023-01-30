import { Args } from '../@types/reolvers/Args';
import { VerifyQueryResponse } from '../@types/reolvers/VerifyQueryResponse';
import { generateNoMatchReport } from '../utils/generateNoMatchReport';

export const resolvers = {
  Query: {
    verify: (_parents: any, args: Args): VerifyQueryResponse => {
      const noMatch = generateNoMatchReport(args);
      const verify = noMatch.length === 0;
      return { verify, noMatch };
    },
  },
};
