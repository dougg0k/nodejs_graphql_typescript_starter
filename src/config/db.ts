import { MikroORM } from "mikro-orm";
import * as entities from "../entities";
import config from "./";

const options = {
	entities: Object.values(entities),
	dbName: config.sqlDatabase.name,
	baseDir: __dirname,
	debug: config.api.isDev,
	logger: console.log.bind(console),
	tsNode: true,
	user: config.sqlDatabase.user,
	password: config.sqlDatabase.password,
	host: config.sqlDatabase.host,
	port: config.sqlDatabase.port,
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
