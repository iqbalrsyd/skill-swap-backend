const express = require('express');
const { addSkill, addSkillCategory } = require('../controllers/skillController');

const router = express.Router();

// Routes to create skill and skill category
router.post('/skills', addSkill);
router.post('/categories', addSkillCategory);

module.exports = router;