const axios = require('axios');

const API_URL = 'http://localhost:3333/users';

const userNew = {firstName:'Axios', lastName:'', sex: true};


async function getUser() {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function createUser(user){ 
  const res = await axios.post(
    API_URL, 
    userNew, {
    headers: {
      'content-type': 'application/json'
    }
  })
  return res;
}

createUser(userNew)
.then((res) => {
  console.log('User created:', res.data.result);
})
.catch(error => console.log(error));

getUser();
// Axios documentation
// https://github.com/axios/axios