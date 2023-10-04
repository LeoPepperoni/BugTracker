// Importing necessary modules
const express = require('express')
// Destructuring and importing the necessary functions from the projectController
const {
    createProject, 
    getProjects,
    getProject,
    deleteProject,
    updateProject
} = require('../controllers/projectController')

// Initializing a new router
const router = express.Router()

// Route to GET all projects. On a GET request to '/', the getProjects function from the controller will be invoked.
router.get('/', getProjects)

// Route to GET a specific project by its ID. On a GET request to '/:id', the getProject function from the controller will be invoked.
router.get('/:id', getProject)

// Route to POST (create) a single project. On a POST request to '/', the createProject function from the controller will be invoked.
router.post('/', createProject)

// Route to DELETE a single project by its ID. Currently, this route responds with a JSON message.
router.delete('/:id', deleteProject)

// Route to PATCH (update) a single project by its ID. Currently, this route responds with a JSON message.
router.patch('/:id', updateProject)

// Exporting the router to be used in other modules
module.exports = router
