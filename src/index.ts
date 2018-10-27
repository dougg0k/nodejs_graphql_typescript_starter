import "reflect-metadata";
import * as dotenv from "dotenv";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import * as compression from "compression";
import * as helmet from "helmet";
import * as morgan from "morgan";
import * as rateLimit from "express-rate-limit";

import { createSchema } from "./utils/mergeSchemas";
import { logger } from "./utils/logger";

dotenv.config();

const setupApp = () => {
  const app = express();

  app.use(helmet());
  app.use(compression());
  app.use(morgan("combined", { stream: logger }));

  const limiter = new rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10000 // limit each IP to X requests per windowMs
  });
  app.use(limiter);
  return app;
};

const startServer = async () => {
  const schema = await createSchema();

  const server = new ApolloServer({
    schema,
    context: ({ req }: any) => ({ req })
  });

  await createConnection();

  const app = setupApp();

  server.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: process.env.CORS_ORIGIN
    }
  });

  app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at port 4000`));
};

startServer();
