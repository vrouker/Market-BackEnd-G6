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

  export async function getOrders ({user_id}){
    const sql = `
    SELECT * FROM orders WHERE user_id = $1;
    `
    const {rows: orders} = await db.query(sql, [user_id])
    return orders
  }

 