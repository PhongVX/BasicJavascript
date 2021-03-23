const express = require("express");
const taskRoute = require('./routes/tasks');

const PORT = 3333;
const server = express();

server.use('/tasks', taskRoute)

server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on ${PORT}`);
});
