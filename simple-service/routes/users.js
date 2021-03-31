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
    const newUser = {id: new Date().getTime(), firstName: body.firstName, lastName: body.lastName, sex: body.sex };
    users.push(newUser);
    res.json({result: newUser});
});

router.put('/', (req, res) => {
    const body = req.body;
    const { id, ...restInfo } = body;
    let updatedUser = {};
    for (let user of users){ 
        if (user.id === id) { 
            updatedUser = {...user, ...restInfo};
            user.firstName = updatedUser.firstName;
            user.lastName  = updatedUser.lastName;
            user.sex = updatedUser.sex;
            break;
        }
    }
    res.json({result: updatedUser});
});

router.delete('/:id', (req, res) => { 
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id !== id);
    users.splice(userIndex, 1);
    res.json({result: users});
});

module.exports = router;