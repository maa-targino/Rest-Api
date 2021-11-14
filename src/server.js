require('dotenv/config')
const app = require('./app')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const DB_URL = process.env.DB_URL

mongoose
.connect(DB_URL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB successfully'))
.catch((error) => console.log(error)) 

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`)
})