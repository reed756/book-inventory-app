import { fileURLToPath } from "url";
import { dirname } from "path";
import pkg from "pg";
import dotenv from "dotenv";

const { Pool } = pkg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ENV = process.env.NODE_ENV || "development";

dotenv.config({
  path: `${__dirname}/../.env.${ENV}`,
});

if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
  throw new Error("PGDATABASE or DATABASE_URL not set");
}

const config = {};

if (ENV === "production") {
  config.connectionString = process.env.DATABASE_URL;
  config.max = 2;
}

export default new Pool(config);
