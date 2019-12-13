const express = require('express');
const projectsModel = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    projectsModel.getProjects()
        .then(projects => {
            const temp = projects;
            for(let i = 0; i < temp.length; i++){
                temp[i].completed = !!temp.completed;
            }
            res.status(200).json(temp);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error retrieving projects' });
        })
})

router.get('/resources', (req, res) => {
    projectsModel.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error retrieving resources' })
        })
})

router.get('/tasks', (req, res) => {
    projectsModel.getTasks()
        .then(tasks => {
            const temp = tasks;
            for(let i = 0; i < temp.length; i++){
                temp[i].completed = !!temp.completed;
            }
            res.status(200).json(temp);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error retrieving tasks' });
        })
})

router.post('/', (req, res) => {
    projectsModel.addProject(req.body)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error adding project' })
        })
})

router.post('/tasks', (req, res) => {
    projectsModel.addTask(req.body)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error adding project' })
        })
})

router.post('/resources', (req, res) => {
    projectsModel.addResource(req.body)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error adding project' })
        })
})

module.exports = router;