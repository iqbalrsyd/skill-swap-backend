const mongoose = require('mongoose');

const skillCategorySchema = new mongoose.Schema({
    categoryName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('SkillCategory', skillCategorySchema);