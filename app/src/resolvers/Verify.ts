type Rules = {
  rule: String;
  value: number;
};

export const resolvers = {
  Query: {
    verify: (_parents: any, args: Rules) => {
      return { verify: true, noMatch: ['ah sim'] };
    },
  },
};
