 import db from "../client.js"
 
 /** @returns the entry created according to the provided details */

  export async function createReview({ rating, comment, product_id }) {
    const sql = `
      INSERT INTO reviews (rating, comment, product_id)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const { rows: review } = await db.query(sql, [rating, comment, product_id]);
    return review[0];
  }

//    //Get Product Reviews

   export async function getReviewsId (product_id){
    const sql = `
    SELECT * FROM reviews WHERE product_id = $1
    ;
    `
    const {rows: reviews} = await db.query(sql, [product_id])
    return reviews;
  }

// Get all reviews
export async function getReviews() {
  const sql = `
    SELECT * FROM reviews;
  `;
  const { rows: reviews } = await db.query(sql);
  return reviews;
}