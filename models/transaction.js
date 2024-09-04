const mongoose = require('mongoose');  

const transactionSchema = new mongoose.Schema({
    servicesId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    buyerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    status: { type: String, required: true },
    createdAtt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', transactionSchema);