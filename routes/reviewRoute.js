const express = require('express');
const { addReview, getServiceReviews } = require('../controllers/reviewController');

const router = express.Router();

// Tambah review untuk suatu service
router.post('/reviews', addReview);

// Ambil semua review untuk suatu service
router.get('/reviews/:serviceId', getServiceReviews);

module.exports = router;
