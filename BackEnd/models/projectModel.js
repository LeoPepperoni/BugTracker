// Importing the necessary mongoose module
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Defining a schema for bugs (e.g., software issues)
const bugSchema = new Schema({
    // The title of the bug, which is a required field
    title: {
        type: String,
        required: true
    },
    // Description of the bug, also a required field
    description: {
        type: String,
        required: true
    },
    // The current status of the bug. 
    // It can be one of the following values: Open, In Progress, or Resolved.
    // By default, the status will be set to 'Open'.
    status: {
        type: String,
        enum: ['Open', 'In Progress', 'Resolved'],
        default: 'Open',
        required: true
    },
    // The priority level of the bug.
    // It can be one of the following values: Low, Medium, or High.
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        required: true
    }
}, 
// Enabling timestamps. This will automatically add 'createdAt' and 'updatedAt' fields to each document.
{timestamps: true})

// Defining a schema for projects
const projectSchema = new Schema({
    // The title of the project, which is a required field
    title: {
        type: String,
        required: true
    },
    // Description of the project, also a required field
    description:{
        type: String,
        required: true
    },
    // An array of bugs associated with the project, 
    // using the bugSchema defined above. This allows embedding bug documents inside the project document.
    bugs: [bugSchema]
}, 
// Enabling timestamps. This will automatically add 'createdAt' and 'updatedAt' fields to each document.
{timestamps: true})

// Exporting the Project model based on the projectSchema.
// This will create a collection named 'projects' (plural form of 'Project') in the MongoDB database.
module.exports = mongoose.model('Project', projectSchema)