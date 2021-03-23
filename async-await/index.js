
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

const getUsersAndSkills = async () => {
  let result = [];
  const users = await getUsers();
  result = await Promise.all(users.map(async(user) => {
    const userSkills = await getUserSkills(user.id)
    return {...user, skills: userSkills} 
  }))
  return result;
}

getUsersAndSkills().then(result => console.log(JSON.stringify(result)))




