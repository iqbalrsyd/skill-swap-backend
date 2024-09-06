const Service = require('../models/service');

// Add Service
exports.addService = async (req, res) => {
    const { title, description, price, provider, category, location } = req.body;

    try {
        const service = new Service({
            title,
            description,
            price,
            provider,
            category,
            location,
        });

        await service.save();
        res.status(201).json({ message: 'Service created successfully', service });
    } catch (error) {
        console.error('Error adding service: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get Services
exports.getServices = async (req, res) => {
    try {
        const services = await Service.find().populate('provider', 'username');
        res.status(200).json(services);
    } catch (error) {
        console.error('Error fetching services: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
