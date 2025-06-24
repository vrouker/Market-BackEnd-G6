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
  };


//loginUser
export async function loginUser({username}){
  const sql = `SELECT * FROM users WHERE username = $1`;

  const {rows:user} = await db.query(sql, [username]);
  return user[0];
  
};


//getUserById
export async function getUserById(id){
  const sql = `
    SELECT * FROM users WHERE id = $1;`;
    
  const {rows: user} = await db.query(sql, [id]);

  return user;
};