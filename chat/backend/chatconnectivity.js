import express from 'express';
const app = express();
import cors from 'cors';
import chat from './controllers/chat';


const servercreation = require('http').createServer(app);

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const io = require('socket.io')(servercreation,{
    path:'/socket.io',
    cors:{
        origin:"http://localhost:3000",
        method:['GET',"POST"],
        allowedHeaders:['content-type']
    }
    
})


chat(io)

app.get('/',(req,res)=>{
    res.send("checking")
})


servercreation.listen(5300,()=>{
    console.log("port connected");
})