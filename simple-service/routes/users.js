const express = require('express');
const router = express.Router();
const { users, skills } = require('../data');

router.get('/', (req, res) => { 
    res.json({result: users});
});

router.get('/:userId/skills', (req, res) => {
    const { userId } = req.params;
    const userSkills = skills.filter((s) => Number(userId) === s.userId); 
    res.json({result: userSkills});
});

module.exports = router;