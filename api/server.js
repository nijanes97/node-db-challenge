const express = require('express');
const server = express();
const ProjectsRouter = require('./projects-router.js');

server.use(express.json());
server.use('/projects', ProjectsRouter);
server.get('/', (req, res) => {
    res.status(200).json({ message: 'working' })
})

module.exports = server;