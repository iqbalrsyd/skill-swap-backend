const express = require('express');
const { sendMessage, getMessages } = require('../controllers/messageController');

const router = express.Router();

// Send a message
router.post('/', sendMessage);

// Get all messages for a user
router.get('/:userId', getMessages);

module.exports = router;
