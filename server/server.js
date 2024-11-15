console.log("server");

// node js using server

// const servercreation = require('http');
// const filesystem = require('fs');

// servercreation.createServer(function (request,response) {
//     filesystem.open("rishi.txt",function name(params) {
        
//     })
//     filesystem.writeFileSync("rishi.txt","welcome to web d school",function name(params) {
        
//     })
//     filesystem.appendFileSync("rishi.txt"," rishi is a good boy",function name(params) {
        
//     })
//     let output = filesystem.readFileSync("rishi.txt","utf-8",function name(params) {
        
//     })
    
//     response.write("welcome to node js with server class "+output);
//     response.end();
// }).listen(2001);



// express using server


console.log("welcome");

const expressframework = require('express');

const filesystem = require('fs')

const app = expressframework();


app.get("/",(req,res)=>{
    filesystem.appendFileSync("rishi.txt"," akash is a good boy",function name(params) {
        
    })
    let output = filesystem.readFileSync('rishi.txt',"utf-8",function name(params) {
        
    })
    res.send("welcome to express frame work class"+output)
})

app.listen(30001)