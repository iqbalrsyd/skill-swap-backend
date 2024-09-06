const Message = require('../models/Message');

// Send Message
exports.sendMessage = async (req, res) => {
    const { sender, receiver, content } = req.body;

    try {
        const message = new Message({
            sender,
            receiver,
            content,
        });

        await message.save();
        res.status(201).json({ message: 'Message sent successfully', message });
    } catch (error) {
        console.error('Error sending message: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get Messages for a User
exports.getMessages = async (req, res) => {
    const { userId } = req.params;

    try {
        const messages = await Message.find({
            $or: [{ sender: userId }, { receiver: userId }],
        }).populate('sender receiver', 'username');

        res.status(200).json(messages);
    } catch (error) {
        console.error('Error fetching messages: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
