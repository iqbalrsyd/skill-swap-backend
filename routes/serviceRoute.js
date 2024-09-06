const express = require('express');
const { addService, getServices } = require('../controllers/serviceController');

const router = express.Router();

// Add a service
router.post('/', addService);

// Get all services
router.get('/', getServices);

module.exports = router;
