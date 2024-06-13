const express = require('express');
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const blogRoutes = require('./routes/BlogRoutes')
const htmlRoutes = require('./routes/HtmlRoutes')
const app = express();


const PORT = 3000;
const MONGODB_URI = "mongodb://localhost:27017/sqilco"

app.use(bodyparser.json())
app.use('/api', blogRoutes)
app.use('/api', htmlRoutes)

mongoose.connect(MONGODB_URI).then(()=>{
    console.log("Connected to the database")
}).catch(()=>{
    console.log("Error connecting to database")
})



app.listen(PORT, ()=>{
    console.log(`Server Running On Port: ${PORT}`)
})