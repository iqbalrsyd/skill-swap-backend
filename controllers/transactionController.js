const Transaction = require('../models/transaction');

// Create a Transaction
exports.createTransaction = async (req, res) => {
    const { serviceId, buyerId, sellerId, amount, status } = req.body;

    try {
        const transaction = new Transaction({
            serviceId,
            buyerId,
            sellerId,
            amount,
            status,
        });

        await transaction.save();
        res.status(201).json({ message: 'Transaction created successfully', transaction });
    } catch (error) {
        console.error('Error creating transaction: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get Transactions for a User
exports.getTransactions = async (req, res) => {
    const { userId } = req.params;

    try {
        const transactions = await Transaction.find({ $or: [{ buyerId: userId }, { sellerId: userId }] });
        res.status(200).json(transactions);
    } catch (error) {
        console.error('Error fetching transactions: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
