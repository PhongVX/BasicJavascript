
//Good solution is not bad, bad solution is not fun.
const fetch = require('node-fetch');

const API_URL = 'http://localhost:3333/users';

const printUserAndSkills = (user, userSkills) => {
  console.log(`${user.id} - ${user.firstName} - ${user.lastName} - ${userSkills.map((us) => us.skillName).join(',')}`)
}

const getUsers = () => {
  return new Promise((resolve, reject) => {
    fetch(API_URL)
      .then(response => response.json())
      .then((response) => {
        const { result } = response;
        resolve(result)
      })
      .catch((error)=>{
        reject(error);
      })
  })
}

const getUserSkills = (userId) => {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/${userId}/skills`)
    .then(response => response.json())
    .then((response) => {
      const { result } = response;
      resolve(result);
    })
    .catch((error)=>{
      reject(error);
    })
  });
}

const getUsersAndSkills = (callback) => {
  getUsers()
  .then((users)=>{
    users.forEach((user) => {
      getUserSkills(user.id).then((userSkills) => {
        callback(user, userSkills);
      })
    })
  })
}

getUsersAndSkills(printUserAndSkills)

