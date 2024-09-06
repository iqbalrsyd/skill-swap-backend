const Cart = require('../models/cart');

// Add to Cart
exports.addToCart = async (req, res) => {
    const { userId, serviceId, quantity } = req.body;

    try {
        const cart = await Cart.findOne({ userId });

        if (cart) {
            cart.items.push({ serviceId, quantity });
            await cart.save();
            res.status(200).json({ message: 'Added to cart successfully', cart });
        } else {
            const newCart = new Cart({
                userId,
                items: [{ serviceId, quantity }],
            });

            await newCart.save();
            res.status(201).json({ message: 'Cart created successfully', newCart });
        }
    } catch (error) {
        console.error('Error adding to cart: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get User's Cart
exports.getUserCart = async (req, res) => {
    const { userId } = req.params;

    try {
        const cart = await Cart.findOne({ userId }).populate('items.serviceId');
        res.status(200).json(cart);
    } catch (error) {
        console.error('Error fetching cart: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};