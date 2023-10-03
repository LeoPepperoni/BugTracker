const Project = require('../models/projectModel')
const mongoose = require('mongoose')

// get all projects
const getProjects = async (req, res) => {
    const projects = await Project.find({}).sort({createdAt: -1})

    res.status(200).json(projects)

}

// get a single project
const getProject = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: 'No such Project'})
    }

    const project = await Project.findById(id)

    if (!project){
        return res.status(404).json({error: 'No such Project'})
    }

    res.status(200).json(project)
}

// create a new project
const createProject = async (req, res) => {
    const {title, description} = req.body

    // add project to database
    try {
        const project = await Project.create({title, description})
        res.status(200).json(project)
    }   catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a project

// update a project

module.exports = {
    createProject,
    getProjects,
    getProject
}