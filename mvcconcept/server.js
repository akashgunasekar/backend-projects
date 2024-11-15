const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/formdatabase",{}).then(()=>{
    console.log("mongodb connected");
})


app.set("view engine","ejs");

app.use(bodyparser.urlencoded({extended:true}));
app.use("/",require('./server/routes/routes'))


app.listen(500)