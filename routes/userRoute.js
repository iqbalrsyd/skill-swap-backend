const express = require('express');
const { addSkillsToUser } = require('../controllers/userController');

const router = express.Router();

router.post('/:userId/skills', addSkillsToUser);

module.exports = router;
