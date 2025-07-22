import pool from "../lib/db"; // Make sure db.js exports the pool correctly

class Query {
  static async create(name, email, course, description) {
    const [result] = await pool
      .promise()
      .execute(
        "INSERT INTO tbl_contact (name, email, course, description) VALUES (?, ?, ?, ?)",
        [name, email, course, description],
      );
    return result.insertId;
  }

  static async findAll() {
    const [rows] = await pool
      .promise()
      .execute("SELECT * FROM queries ORDER BY created_at DESC");
    return rows;
  }
}

export default Query;
