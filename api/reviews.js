import express from 'express';
const router = express.Router();
export default router;

import { getReviews } from '../db/queries/reviews.js';

// GET /reviews/:product_id

router.route('/:id').get(async (req, res) => {
    const  id  = req.params.id;

    if (!id) {
        return res.status(400).send('Product ID is required');
    } 
    
    const reviews = await getReviews(id);
  console.log(reviews);

    if (!reviews || reviews.length === 0) {
        return res.status(404).send('There were no reviews found for this product');
    }

    res.status(200).send(reviews);
})
