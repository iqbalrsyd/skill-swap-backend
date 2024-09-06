const express = require('express');
const { addToCart, getUserCart } = require('../controllers/cartController');

const router = express.Router();

// Tambahkan service ke cart
router.post('/cart', addToCart);

// Dapatkan cart user
router.get('/cart/:userId', getUserCart);

module.exports = router;
