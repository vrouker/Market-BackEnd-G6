import express from 'express';
const router = express.Router();
export default router;

import { getReviews } from '../db/queries/reviews.js';

// GET /reviews/:product_id

router.route('/reviews/:product_id').get(async (req, res) => {
    const product_id  = req.params.product_id;
    if (!product_id) {
        return res.status(400).send('Product ID is required');
    } 
    
    const reviews = await getReviewsId(product_id);

    if (!reviews || reviews.length === 0) {
        return res.status(404).send('There were no reviews found for this product');
    }

    res.status(200).send(reviews);
})

// GET /reviews
router.route('/reviews').get(async (req, res) => {
    const reviews = await getReviews();

    if (!reviews || reviews.length === 0) {
        return res.status(404).send('There were no reviews found');
    }

    res.status(200).send(reviews);
});