const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    quantity: { type: Number, required: true, default: 1 },
});

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [cartItemSchema],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Cart', cartSchema);
