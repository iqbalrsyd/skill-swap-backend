const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Import skill model
const Skill = require('./skill');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    profilePic: { type: String, required: true },
    bio: { type: String, required: true },
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],  // Reference Skill model
    tokenBalance: { type: Number, required: true, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('passwordHash')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
    next();
});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.passwordHash);
};

module.exports = mongoose.model('User', userSchema);
