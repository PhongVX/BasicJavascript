const express = require('express');
const router = express.Router();
const { users, skills } = require('../data');
const { getRandomColor } = require('../utils');

router.get('/random', (req, res) => { 
    const color = getRandomColor();
    res.json({result: color});
});

module.exports = router;