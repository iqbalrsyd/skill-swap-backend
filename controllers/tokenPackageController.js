const TokenPackage = require('../models/tokenPackage');

// Add a Token Package
exports.addTokenPackage = async (req, res) => {
    const { packageName, price, tokenAmount } = req.body;

    try {
        const tokenPackage = new TokenPackage({
            packageName,
            price,
            tokenAmount,
        });

        await tokenPackage.save();
        res.status(201).json({ message: 'Token Package created successfully', tokenPackage });
    } catch (error) {
        console.error('Error adding token package: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all Token Packages
exports.getTokenPackages = async (req, res) => {
    try {
        const tokenPackages = await TokenPackage.find();
        res.status(200).json(tokenPackages);
    } catch (error) {
        console.error('Error fetching token packages: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
