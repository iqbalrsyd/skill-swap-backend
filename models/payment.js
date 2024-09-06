const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, required: true }, // e.g., credit card, PayPal, tokens
    paymentStatus: { type: String, required: true, default: 'pending' }, // pending, completed
    paymentDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Payment', paymentSchema);
