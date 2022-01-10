const mongoose = require('mongoose');

const catModel = new mongoose.Schema({

    id:{
        type:String,
        required: true,
    },

    title:{
        type: String,
        required: true,
    },

    color:{
        type: String,
        required: true,
    },

    icon:{
       type: String,
       required: true,
    },

    todoArr:{
        type: Array,
        required: false
    }

},{timestamps:true})

module.exports = mongoose.model('category' , catModel)