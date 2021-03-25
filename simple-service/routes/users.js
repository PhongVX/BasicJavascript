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

router.post('/', (req, res) => {
    const body = req.body;
    console.log(body);
    const newUser = {id: new Date().getTime(), firstName: body.firstName, lastName: body.lastName, sex: body.sex };
    users.push(newUser);
    res.json({result: newUser});
});

module.exports = router;