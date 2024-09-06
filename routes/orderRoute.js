const express = require('express');
const { createOrder, getUserOrders } = require('../controllers/orderController');

const router = express.Router();

// Buat order baru
router.post('/order', createOrder);

// Ambil order user
router.get('/orders/:userId', getUserOrders);

module.exports = router;
