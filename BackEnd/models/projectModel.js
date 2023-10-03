const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bugSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Open', 'In Progress', 'Resolved'],
        default: 'Open',
        required: true
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        required: true
    }
}, {timestamps: true});

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    bugs: [bugSchema]
}, {timestamps: true})

module.exports = mongoose.model('Project', projectSchema)

