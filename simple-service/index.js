const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoute = require('./routes/users');
const colorRoute = require('./routes/colors');

const PORT = 3333;
const server = express();

server.use(cors());
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
server.use(bodyParser.json());

server.use('/users', userRoute);
server.use('/colors', colorRoute);

server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on ${PORT}`);
});
