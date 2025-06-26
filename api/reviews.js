import express from 'express';
const router = express.Router();
export default router;

import { getReviews, getReviewsId } from '../db/queries/reviews.js';

// GET /reviews- Get all reviews
router.route('/').get(async (req, res) => {
    const reviews = await getReviews();

    if (!reviews || reviews.length === 0) {
        return res.status(404).send('There were no reviews found');
    }

    res.status(200).send(reviews);
});

// GET /reviews/:product_id- Get reviews for by product ID

router.route('/:id').get(async (req, res) => {
    const  id  = req.params.id;

    if (!id) {
        return res.status(400).send('Product ID is required');
    } 
    
    const reviews = await getReviewsId(id);
  console.log(reviews);

    if (!reviews || reviews.length === 0) {
        return res.status(404).send('There were no reviews found for this product');
    }

    res.status(200).send(reviews);
})

// Post /reviews - Create a new review
router.route('/').post(async (req, res) => {
    const { rating, comment, product_id } = req.body;

    if(!req.body) {
        return res.status(400).send('Request body is required');
    }

    if (!rating || !comment || !product_id) {
        return res.status(400).send('Rating, comment, and product ID are required');
    }

    try {
        const review = await createReview({ rating, comment, product_id });
        res.status(201).send(review);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while creating the review');
    }
});

