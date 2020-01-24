import * as dotenv from "dotenv";
import { MikroORM } from "mikro-orm";
import * as entities from "../entities";

dotenv.config();

const options = {
	entities: Object.values(entities),
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
		path: "./src/migrations",
		transactional: true,
		allOrNothing: true,
	},
	cache: {
		enabled: false,
	},
};

export async function db(): Promise<MikroORM> {
	return MikroORM.init(options);
}

export default options;
