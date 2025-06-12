 import db from "../client.js"
 
 /** @returns the entry created according to the provided details */
  export async function createProduct({ title, description, price }) {
    const sql = `
      INSERT INTO users (title, description, price)
      VALUES ($1, $2)
      RETURNING *;
    `;
    const { rows: product } = await db.query(sql, [title, description, price]);
    return product[0];
  }