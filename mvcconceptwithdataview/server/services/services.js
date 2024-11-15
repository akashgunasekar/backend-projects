exports.formfile = (req,res)=>{
    res.render("form")
}
// getting link sending data to the file
const axios = require('axios');
exports.datafile = (req,res)=>{
    axios.get('http://localhost:1000/api/users').then(function (response) {
        console.log(response);
        res.render("data",{users: response.data})
    })
}

exports.viewrishifile = (req,res)=>{
    res.render('rishi')
}