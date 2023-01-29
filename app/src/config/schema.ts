export const typeDefs = `#graphql
  type Verify {
    verify: Boolean!
    noMatch: [String]!
  }

  input Rules {
    rule: String!, value: Int!
  }

  type Query {
    verify(password: String!, rules: [Rules]!): Verify
  }
`;
