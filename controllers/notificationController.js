const Notification = require('../models/notification');

// Add Notification
exports.addNotification = async (req, res) => {
    const { userId, message, type } = req.body;

    try {
        const notification = new Notification({
            userId,
            message,
            type,
        });

        await notification.save();
        res.status(201).json({ message: 'Notification added successfully', notification });
    } catch (error) {
        console.error('Error adding notification: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get Notifications for a User
exports.getNotifications = async (req, res) => {
    const { userId } = req.params;

    try {
        const notifications = await Notification.find({ userId });
        res.status(200).json(notifications);
    } catch (error) {
        console.error('Error fetching notifications: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
