const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/dddas',{}).then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use('/',require('./server/routes/routes'));
app.set("view engine","ejs");


app.listen(1000,()=>console.log("port connected"));