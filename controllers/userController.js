const User = require('../models/user');

exports.registerUser = async (req, res) => {
    try {
        const {username, email, passwordHash, profilePic, bio, tokenBalance} = req.body;
        const newUser = new User({username, email, passwordHash, profilePic, bio, tokenBalance});
        await newUser.save();
        res.status(201).json({
            message: 'User registered successfully',
            user: newUser,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            error: error.message,
        });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User
            .findOne({email})
            .select('+passwordHash');
            if(!user || !(await user.comparePassword(password))){
                return res.status(404).json({
                    message: 'User not found',
                });
            }
            res.json({message: 'User logged in successfully', user});
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            error: error.message,
        });
    }
};

