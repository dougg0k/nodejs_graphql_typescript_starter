import * as dotenv from "dotenv";
import * as appRoot from "app-root-path";

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case "test":
    path = `${appRoot}/.env.test`;
    break;
  case "production":
    path = `${appRoot}/.env.production`;
    break;
  default:
    path = `${appRoot}/.env.development`;
}
dotenv.config({ path: path });
