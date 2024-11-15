exports.index =(req,res)=>{
    res.render("index")
}
const axios = require('axios')
exports.thankyoufile = (req,res)=>{
    axios.get('http://localhost:500/api/users').then(function (response) {
        
        res.render("thankyou",{users:response.data})
    })
}