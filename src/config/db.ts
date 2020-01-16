import { MikroORM } from "mikro-orm";
import entities from "../entities";

async function db() {
  return await MikroORM.init({
    entities,
    entitiesDirs: ["../entities"],
    entitiesDirsTs: ["../entities"],
    dbName: String(process.env.DATABASE_DB),
    baseDir: __dirname,
    debug: process.env.NODE_ENV === "development",
    logger: console.log.bind(console),
    tsNode: true,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    type: "postgresql",
    forceUtcTimezone: true,
    strict: true,
    migrations: {
      tableName: "migrations",
      path: "../migrations",
      pattern: /^[\w-]+\d+\.ts$/,
      transactional: true,
      allOrNothing: true,
    },
    cache: {
      enabled: false,
    },
  });
}

export default db;
