const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String},
    price: { type: Number, required: true },
    provider: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Service', servicesSchema);