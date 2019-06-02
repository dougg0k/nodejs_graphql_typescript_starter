import { ApolloServer } from 'apollo-server-fastify';
import * as dotenv from 'dotenv';
import * as fastify from 'fastify';
import * as cors from 'fastify-cors';
import * as helmet from 'fastify-helmet';
import * as rateLimiter from 'fastify-rate-limit';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { createSchema } from './utils/mergeSchemas';

dotenv.config();

const setupApp = (): fastify.FastifyInstance => {
  const app = fastify({
    logger: {
      level: 'info',
    },
  });

  app.register(helmet);
  app.register(cors, {
    credentials: true,
    origin: process.env.CORS_ORIGIN,
  });
  app.register(rateLimiter, {
    timeWindow: 15 * 60 * 1000, // 15 minutes
    max: 10000, // limit each IP to X requests per timeWindow
  });
  return app;
};

const startServer = async (): Promise<void> => {
  const schema = await createSchema();

  const server = new ApolloServer({
    schema,
    context: ({ req }: any) => ({ req }),
  });

  await createConnection();

  const app = setupApp();

  app.register(server.createHandler());
  app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at port 4000`));
};

startServer();
