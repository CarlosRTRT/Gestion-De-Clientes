import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
    database: process.env.DB_DATABASE,
});

// export async function query(sql: string) {  
