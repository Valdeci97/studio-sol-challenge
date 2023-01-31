import { ApolloServer } from '@apollo/server';
import { typeDefs } from '../../config/schema';
import { resolvers } from '../../resolvers/Verify';

export const mockServer = new ApolloServer({
  typeDefs,
  resolvers,
});
