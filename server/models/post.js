const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    place:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    budget:{
        type:Number,
        required:true
    },
    content:{
        type:String,
        required:true
    }
})

const postModel = mongoose.model('post',postSchema);

module.exports = postModel;