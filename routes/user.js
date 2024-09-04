const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const app = express();
app.use(express.json());

app.post('api/user/:userId/skills', async (req, res) => {
    const {userId} = req.params;
    const {skills} = req.body;

    try {
        const user = await User.findById(userId);
        user.skills.push(skills);
        await user.save();
        res.json(user);
    } catch (error) {
        console.error('Error adding skills: ', error);
        res.status(500).json('Internal server error');
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));


