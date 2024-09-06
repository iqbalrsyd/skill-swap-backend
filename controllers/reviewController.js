const Review = require('../models/review');

// Add a Review
exports.addReview = async (req, res) => {
    const { serviceId, userId, rating, comment } = req.body;

    try {
        const review = new Review({
            serviceId,
            userId,
            rating,
            comment,
        });

        await review.save();
        res.status(201).json({ message: 'Review added successfully', review });
    } catch (error) {
        console.error('Error adding review: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get Reviews for a Service
exports.getServiceReviews = async (req, res) => {
    const { serviceId } = req.params;

    try {
        const reviews = await Review.find({ serviceId });
        res.status(200).json(reviews);
    } catch (error) {
        console.error('Error fetching reviews: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
