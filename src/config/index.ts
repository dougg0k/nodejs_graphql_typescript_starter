import * as dotenv from "dotenv";

dotenv.config();

export default {
	api: {
		port: Number(process.env.API_PORT),
		corsOrigin: process.env.CORS_ORIGIN,
		isDev: process.env.NODE_ENV === "development",
	},
	sqlDatabase: {
		user: process.env.DATABASE_USER as string,
		password: process.env.DATABASE_PASSWORD as string,
		host: process.env.DATABASE_HOST as string,
		port: Number(process.env.DATABASE_PORT),
		name: process.env.DATABASE_NAME as string,
	},
};
