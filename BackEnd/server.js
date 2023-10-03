require('dotenv').config()


const express = require('express')
const userRoutes = require('./routes/projects')
const mongoose = require('mongoose')

// create express app
const app = express()

// middleware 
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/projects',userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log('Connected to database & on ', process.env.PORT)
})
    })
    .catch((error) => {
        console.log(error)
    })