const mongoose = require('mongoose')

const filterSchema = new mongoose.Schema({
    date:{
        type:Date,
        required: true,
        trim:true
    },
    ammount:{
        type:Number,
        reqired:true,
        trim:true
    }

})


module.exports = mongoose.model('filter',filterSchema)