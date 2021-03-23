const express = require("express");
const cors = require('cors');

const userRoute = require('./routes/users');

const PORT = 3333;
const server = express();

server.use(cors());

server.use('/users', userRoute)

server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on ${PORT}`);
});
