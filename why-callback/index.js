//Good solution is not bad, bad solution is not fun.
const fetch = require('node-fetch');

const API_URL = 'http://localhost:3333/users';

const printUserAndSkills = (user, userSkills) => {
  console.log(`${user.id} - ${user.firstName} - ${user.lastName} - ${userSkills.map((us)=>us.skillName).join(',')}`)
}

const getUsersNoCallback = () => {
  console.log('Started') 
  let data = [];
  fetch(API_URL)
  .then(response => response.json())
  .then((response) => {
    const { result } = response;
    console.log('Result:', result);
  })
  console.log('End of function')
}

const getUsers = (callback) => { 
  fetch(API_URL)
  .then(response => response.json())
  .then((response) => {
    const { result } = response;
    callback(result)
  })
}

const getUserSkills = (userId, callback) => {
  fetch(`${API_URL}/${userId}/skills`)
  .then(response => response.json())
  .then((response) => {
    const { result } = response;
    callback(result);
  })
}

const getUsersAndSkills = (callback) => {
  getUsers((users) => {
    users.forEach((user) => {
      getUserSkills(user.id, (userSkills) => {
        callback(user, userSkills);
      })
    })
  })
}

// getUsersAndSkills(printUserAndSkills)
getUsersNoCallback();
