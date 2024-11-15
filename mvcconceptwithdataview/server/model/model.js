const mongoose = require('mongoose');

const modelfields = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
    },
    phonenumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})


const modelfieldexport = mongoose.model("Withdatacollection",modelfields);

module.exports = modelfieldexport;