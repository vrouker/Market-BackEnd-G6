 import db from "../client.js"
 
 /** @returns the entry created according to the provided details */
  export async function createReview({ rating, comment, product_id }) {
    const sql = `
      INSERT INTO users (rating, comment, product_id)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const { rows: review } = await db.query(sql, [rating, comment, product_id]);
    return review[0];
  }