const mongoose = require('mongoose');

const mongodbfields = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    }
})

const mongodbfieldsexports = mongoose.model("Databasecollection",mongodbfields);

module.exports=mongodbfieldsexports;