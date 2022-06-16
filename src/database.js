import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "faztpassword",
  database: "company",
});
