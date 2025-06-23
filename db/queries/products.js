 import db from "../client.js"

 //GET all products
  export async function getProducts (){
    const sql = `
    SELECT * FROM products;
    `
    const {rows: products} = await db.query(sql)
    return products
  }

 //GET products by ID

   export async function getProduct ({id}){
    const sql = `
    SELECT * FROM orders WHERE id = $1;
    `
    const {rows: product} = await db.query(sql, [id])
    return product
  }

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

