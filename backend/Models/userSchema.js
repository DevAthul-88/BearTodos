const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    CreatedDate:{
       type: Date,
       default: Date.now,
       required: true
    }


},{timestamps:true})

module.exports = mongoose.model('User' , userSchema)