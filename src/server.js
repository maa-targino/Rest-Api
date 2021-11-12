require('dotenv/config')
const app = require('./app')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

mongoose
.connect(process.env.MLAB_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log(`Error to connect MongoDB: ${error}`)) 

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`)
})