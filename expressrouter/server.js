const express = require('express');

const app = express();

const path = require("path");
const fs = require('fs')


app.get('/',(req,res)=>{
    // fs.open("index.txt","w",function name(params) {
        
    // })
    // fs.appendFileSync("index.txt","akash",function name(params) {
        
    // })
    // let datas = fs.readFileSync('index.txt',"utf-8",function name(params) {
        
    // })
    // res.send(datas)
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/akash',(req,res)=>{
    res.sendFile(path.join(__dirname,"akash.html"))
})

app.get('/rishi',(req,res)=>{
    res.sendFile(path.join(__dirname,"rishi.html"))
})

app.listen(1000,()=>{
    console.log("port connected");
})