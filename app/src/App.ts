import { ApolloServer, BaseContext } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { logger } from './Logger';
import { typeDefs } from './config/schema';

export default class App {
  private app: ApolloServer<BaseContext>;

  constructor() {
    this.app = new ApolloServer({
      typeDefs,
      resolvers: {
        Query: {
          helloworld: () => 'hello world!',
        },
      },
    });
  }

  public async start(): Promise<void> {
    const { url } = await startStandaloneServer(this.app);
    logger.info(`server running at ${url}`);
  }
}
