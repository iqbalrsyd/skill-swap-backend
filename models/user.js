const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    skillName:{ type : String, required: true},
    description: { type : String, required: true},
    price: { type : Number, required: true},
});

const userSchema = new mongoose.Schema({
    username: { type : String, required: true},
    email: { type : String, required: true, unique : true},
    passwordHash: { type : String, required: true},
    profilePic: { type : String, required: true},
    bio: { type : String, required: true},
    skills: [skillSchema],
    tokenBalance: { type : Number, required: true},
    createdAt: { type : Date, default: Date.now},
    updateAt: { type : Date, default: Date.now},
});

module.exports = mongoose.model('User', userSchema);