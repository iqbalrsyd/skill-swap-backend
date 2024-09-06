const express = require('express');
const { createPayment, getUserPayments } = require('../controllers/paymentController');

const router = express.Router();

// Proses pembayaran baru
router.post('/payment', createPayment);

// Ambil semua pembayaran yang dilakukan oleh user
router.get('/payments/:userId', getUserPayments);

module.exports = router;
