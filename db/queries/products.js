 import db from "../client.js"

 //GET all products
  export async function getProducts (){
    const sql = `
    SELECT * FROM products;
    `;
    const {rows: products} = await db.query(sql)
    return products
  }

 //GET products by ID

   export async function getProduct (id){
    const sql = `
    SELECT * FROM products WHERE id = $1;
    `
    const {rows: product} = await db.query(sql, [id])
    return product[0];
  }

 /** @returns the entry created according to the provided details */
  export async function createProduct({ title, description, price, imageUrl }) {
    const sql = `
      INSERT INTO products (title, description, price, imageUrl)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const { rows: product } = await db.query(sql, [title, description, price, imageUrl]);
    return product[0];
  }

