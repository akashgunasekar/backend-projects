const users = [];
const addUsers = (username)=>{
    const name = username.trim().toLowerCase();
    const existingusers = users.find((u)=> u == name)
    if (!username.trim()) return {error : "name is required"};
    if (existingusers) {
        return {error:"you are already connected"}
        
    } else {
        users.push(name)
        return username
    }
}
const chat = (io)=>{

    io.on("connection",(socket)=>{
        console.log("socket",socket);

        socket.on("username",(username)=>{
            console.log("username",username);
            let results = addUsers(username);
            if(results.error){
                return { error: "something went wrong"}
            }
            else{
                io.emit("users",users);
                socket.broadcast.emit("user joined",`${username} joined`);
            }


        })

        socket.on("message",(message)=>{
            io.emit("message",message)
        })
        socket.on("disconnect",()=>{
            console.log("users is disconnected");
        })
    })
}

export default chat;