// Importing required modules
const Project = require('../models/projectModel')
const mongoose = require('mongoose')

// Function to get all projects from the database
const getProjects = async (req, res) => {
    // Fetching all projects from the database and sorting them in descending order based on creation date
    const projects = await Project.find({}).sort({createdAt: -1})

    // Sending the projects as a response with status code 200 (OK)
    res.status(200).json(projects)
}

// Function to get a specific project by its ID from the database
const getProject = async (req, res) => {
    // Destructuring the project ID from request parameters
    const { id } = req.params

    // Checking if the provided ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Project'})
    }

    // Fetching the project by its ID from the database
    const project = await Project.findById(id)

    // If the project is not found, returning an error with status code 404 (Not Found)
    if (!project){
        return res.status(404).json({error: 'No such Project'})
    }

    // Sending the found project as a response with status code 200 (OK)
    res.status(200).json(project)
}

// Function to create a new project in the database
const createProject = async (req, res) => {
    // Destructuring title and description from the request body
    const {title, description} = req.body

    // Trying to add the new project to the database
    try {
        const project = await Project.create({title, description})
        // Sending the created project as a response with status code 200 (OK)
        res.status(200).json(project)
    } catch (error) {
        // In case of an error (e.g. validation error), sending an error response with status code 400 (Bad Request)
        res.status(400).json({error: error.message})
    }
}

// TODO: Add a function to delete a project from the database
const deleteProject = async (req, res) => {
    const { id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Project'})
    }

    const project = await Project.findOneAndDelete({_id: id})

    if (!project){
        return res.status(404).json({error: 'No such Project'})
    }

    res.status(200).json(project)
}
// TODO: Add a function to update a project in the database
const updateProject = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Project'})
    }

    const project = await Project.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if (!project){
        return res.status(404).json({error: 'No such Project'})
    }

    res.status(200).json(project)
}

// Exporting the functions to be used in other modules
module.exports = {
    createProject,
    getProjects,
    getProject,
    deleteProject,
    updateProject
}
