const axios = require('axios');

const API_URL = 'http://localhost:3333/users';

axios.get(API_URL)
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

async function getUser() {
  try {
    const response = await axios.get(API_URL);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// Axios documentation
// https://github.com/axios/axios