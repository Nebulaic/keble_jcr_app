require('dotenv').config() // Import environment variables

// -----------------------------------------------------------------------------

// Load in dependencies
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import router from './api/router'

// -----------------------------------------------------------------------------

// Define constants
const db_uri = process.env.DB_URI 
const port = process.env.PORT || 3000
const app = express()

// -----------------------------------------------------------------------------

// Function that connects to database
const connectDb = () => {
    console.log(`Attempting to connect to MongoDB on port ${27017}.`)
    mongoose.connect(db_uri, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log(`Connected to database on port ${db_uri}.`)
        }) 
        .catch(err => { // Catchs connection error
            console.error(`Failed to connect to database on port ${db_uri}.`)
        })
}

// -----------------------------------------------------------------------------

// Mount routes
app.use('/', router)
// -----------------------------------------------------------------------------

// Start server
app.listen(port, () => {
    connectDb();
    console.log(`App listening on port ${port}.`)
})
