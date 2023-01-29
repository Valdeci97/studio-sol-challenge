import express from 'express';
import cors, { CorsRequest } from 'cors';
import { ApolloServer, BaseContext } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { logger } from './Logger';
import { typeDefs } from './config/schema';
import { resolvers } from './resolvers/Verify';

export default class App {
  private app: express.Application;
  private graphqlServer: ApolloServer<BaseContext>;

  constructor() {
    this.app = express();
    this.graphqlServer = new ApolloServer({
      typeDefs,
      resolvers,
    });
  }

  public async start(PORT: number): Promise<void> {
    await this.graphqlServer.start();
    this.app.use(express.json());
    this.app.use(cors<CorsRequest>());
    this.app.use('/graphql', expressMiddleware(this.graphqlServer));
    this.app.listen(PORT, () => logger.info(`Server running at port ${PORT}`));
  }
}
