const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    skillName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'SkillCategory', required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Skill', skillSchema);