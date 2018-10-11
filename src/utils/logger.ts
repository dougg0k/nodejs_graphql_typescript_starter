import * as winston from "winston";
import * as appRoot from "app-root-path";

export const logger: winston.Logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      level: "info",
      filename: `${appRoot}/logs/all-logs.log`,
      handleExceptions: true,
      maxsize: 5242880, //5MB
      maxFiles: 5
    }),
    new winston.transports.Console({
      level: "debug",
      handleExceptions: true
    })
  ],
  exitOnError: false
});
