const express = require('express')
const mongoose = require('mongoose')
const route = require('./routers/route')
const app = express();


app.use(express.json());

mongoose.connect('mongodb+srv://Pritam:pritam123@cluster0.2crug.mongodb.net/PermissionLess')
.then(()=> console.log("MongoDB connected"))
.catch(error => console.log('error'))

app.use('/', route)
const port = 3000
app.listen(port, function(){
    console.log(`express app running on port ${port}` );
});