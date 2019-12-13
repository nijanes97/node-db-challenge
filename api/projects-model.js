const db = require('../data/db-config.js');

function getProjects() {
    return db('projects');
};

function getResources() {
    return db('resources');
}

function getTasks() {
    return db('tasks')
        .innerJoin('projects', 'tasks.project_id', 'projects.id')
        .select('tasks.*', 'projects.name', 'projects.proj_desc');
}

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
        .then(ids => {
            const [id] = ids;
            return findProjectById(id);
        });
}

function addResource(resource) {
    return db('resources')
        .insert(resource, 'id')
        .then(ids => {
            const [id] = ids;
            return findResourceById(id);
        });
}

function addTask(task) {
    return db('tasks')
        .insert(task, 'id')
        .then(ids => {
            const [id] = ids;
            return findTaskById(id);
        });
}

function addResource(resource) {
    return db('resources')
        .insert(resource, 'id');
}

function addTask(task) {
    return db('tasks')
        .insert(task, 'id');
}

function findProjectById(id) {
    return db('projects')
        .where({ id })
        .first();
}

function findTaskById(id) {
    return db('tasks')
        .where({ id })
        .first();
}

function findResourceById(id) {
    return db('resources')
        .where({ id })
        .first();
}

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask
}