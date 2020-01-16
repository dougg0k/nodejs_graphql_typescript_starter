import * as dotenv from "dotenv";
import * as fastify from "fastify";
import * as cors from "fastify-cors";
import * as helmet from "fastify-helmet";
import * as rateLimiter from "fastify-rate-limit";
import { MikroORM } from "mikro-orm";
import db from "./config/db";
import schema from "./utils/buildSchema";
import GQL = require("fastify-gql");

dotenv.config();

interface SetupApp {
  app: fastify.FastifyInstance;
  db: MikroORM;
}

async function setupApp(): Promise<SetupApp> {
  const app = fastify();
  const orm = await db();

  app.register(helmet);
  app.register(cors, {
    credentials: true,
    origin: process.env.CORS_ORIGIN,
  });
  app.register(rateLimiter, {
    timeWindow: 15 * 60 * 1000, // 15 minutes
    max: 10000, // limit each IP to X requests per timeWindow
  });
  app.register(GQL, {
    schema,
    jit: 1,
    routes: true,
    ide: "playground",
    context: ({ req }: any) => ({ req, db: orm }),
  });

  return { app, db: orm };
}

function watchForErrors(app: fastify.FastifyInstance, db: MikroORM): void {
  process.on("uncaughtException", error => {
    const currentDate = new Date().toUTCString();
    app.log.error(`${currentDate} - uncaughtException: `, error);
    process.exit(1);
  });
  process.on("unhandledRejection", error => {
    app.log.error("uncaughtRejection: ", error);
  });
  process.on("SIGINT", async () => {
    try {
      await db.close();
      process.exit(0);
    } catch (err) {
      process.exit(1);
    }
  });
}

(async function(): Promise<void> {
  const { app, db } = await setupApp();

  const PORT = Number(process.env.APP_PORT) || 4000;
  app.listen({ port: PORT }, () => console.log(`🚀 Server ready at port 4000`));

  watchForErrors(app, db);
})();
