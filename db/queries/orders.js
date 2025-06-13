 import db from "../client.js"
 
 /** @returns the entry created according to the provided details */
  export async function createOrder({ date, note, user_id }) {
    const sql = `
      INSERT INTO users (date, note, user_id)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const { rows: order } = await db.query(sql, [date, note, user_id]);
    return order[0];
  }