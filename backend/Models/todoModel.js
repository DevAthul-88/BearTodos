
const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true,
    },

    description:{
        type: String,
        required:false,
    },

    priority:{
        type:String,
        required:true,
    },

    id:{
        type: String,
        required:true,
    },

    created:{
        type: Date,
        default: Date.now,
        required:false,
    }

},{timestamps:true})

module.exports  = mongoose.model('todo' , todoSchema)