require ('dotenv/config')
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const express = require('express')
const app = express()
app.use(express.json())
const routes = require('./routes')
app.use('/', routes)
const cors = require ('cors')
app.use(cors())

mongoose
.connect(
    process.env.MLAB_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }, () => console.log('Connected to MongoDB')
)

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`)
})