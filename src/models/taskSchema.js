const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    taskCategory:{
        type:String,
        required:true
    }
})

module.exporst = mongoose.model('taskSchema',taskSchema)