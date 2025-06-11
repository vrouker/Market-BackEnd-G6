 import db from "../client.js"
 
 /** @returns the entry created according to the provided details */
  export async function createUser({ username, password }) {
    const sql = `
      INSERT INTO users (username, password)
      VALUES ($1, $2)
      RETURNING *;
    `;
    const { rows: user } = await db.query(sql, [username, password]);
    return user[0];
  }