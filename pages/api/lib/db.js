// src/lib/db.js or wherever your DB file is

import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

console.log(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASSWORD);
console.log(process);

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

const pool = mysql.createPool({
  host: "161.97.122.49",
  user: "vishnu",
  password: "JHF&$Hg99%*hkhm",
  database: "tfs",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Optional: Test the connection once when the app starts
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }

  console.log("Successfully connected to the database");
  connection.release();
});

export default pool;
