const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
    type:{
        type:String,
        required:true,
        enum: ['Comment', 'Activity']
    },
    createdBy:{
        type:String,
        required:true,
        trim:true
    },
    createdAt:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('Comment', commentSchema)

