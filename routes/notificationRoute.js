const express = require('express');
const { addNotification, getNotifications } = require('../controllers/notificationController');

const router = express.Router();

// Add a notification
router.post('/', addNotification);

// Get all notifications for a user
router.get('/:userId', getNotifications);

module.exports = router;
