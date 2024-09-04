const mongoose = require('mongoose');

const tokenPackageSchema = new mongoose.Schema({
    packageName: { type: String, required: true },
    price: { type: Number, required: true },
    tokenAmount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('TokenPackage', tokenPackageSchema);