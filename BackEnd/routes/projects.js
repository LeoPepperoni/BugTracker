const express = require('express')
const {
    createProject, 
    getProjects,
    getProject
} = require('../controllers/projectController')

const router = express.Router()

// GET all projects
router.get('/', getProjects)

// GET a single project
router.get('/:id', getProject)

// POST a single project
router.post('/', createProject)

// DELETE a single project
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE single project'})
})

// UPDATE a single project
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE single project'})
})

module.exports = router