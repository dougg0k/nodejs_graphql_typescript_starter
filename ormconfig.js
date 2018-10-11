module.exports = {
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: "graphql_starter",
  logging: false,
  synchronize: process.env.NODE_ENV === "development",
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migrations/**/*.ts"],
  subscribers: ["src/subscribers/**/*.ts"],
  "cli.entitiesDir": "src/entities/",
  "cli.migrationsDir": "src/migrations/",
  "cli.subscribersDir": "src/subscribers/"
};
