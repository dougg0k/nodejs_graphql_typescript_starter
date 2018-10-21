const isDev = process.env.NODE_ENV === "development";
module.exports = {
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: "graphql_starter",
  logging: false,
  synchronize: isDev,
  entities: isDev ? ["src/entities/**/*"] : ["entities/**/*"],
  migrations: isDev ? ["src/migrations/**/*"] : ["migrations/**/*"],
  subscribers: isDev ? ["src/subscribers/**/*"] : ["subscribers/**/*"],
  "cli.entitiesDir": "src/entities/",
  "cli.migrationsDir": "src/migrations/",
  "cli.subscribersDir": "src/subscribers/"
};
