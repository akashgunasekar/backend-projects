const express = require('express');
const app = express();
const path = require('path');
const qrcode = require('qrcode');


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"view"))

app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/scan',(req,res)=>{
    const text_area = req.body.text;
    qrcode.toDataURL(text_area,(err,data)=>{
        res.render('scan',{qr:data})
    })
})

app.listen(2003,()=>{
    console.log("port connected");
})