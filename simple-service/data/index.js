
let users = [
    {
        id: 1001,
        firstName: 'John',
        lastName: 'Mathew',
        sex: true
    },
    {
        id: 1002,
        firstName: 'Sophia',
        lastName: 'Ran',
        sex: false
    },
    {
        id: 1003,
        firstName: 'Jim',
        lastName: 'Parker',
        sex: true
    }
];


let skills = [
    {
        id: 1,
        skillName: 'Golang',
        userId: 1001,
    },
    {
        id: 2,
        skillName: 'Golang',
        userId: 1003,
    },
    {
        id: 3,
        skillName: 'React',
        userId: 1001,
    },
    {
        id: 4,
        skillName: 'NodeJS',
        userId: 1002
    },
    {
        id: 5,
        skillName: 'Java',
        userId: 1003
    }
];

module.exports = {
    users,
    skills
}
