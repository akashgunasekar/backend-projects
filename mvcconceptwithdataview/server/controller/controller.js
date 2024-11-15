const modelfilecalling = require('../model/model');

exports.create = (req,res)=>{
    let savedata = new modelfilecalling({
        fname:req.body.fname,
        phonenumber:req.body.phonenumber,
        email:req.body.email
    })

    savedata.save().then((dd)=>{
        console.log(dd);
        res.redirect('/data')
    })
}

// mongodb data getting from mongodb 

exports.find=(req,res)=>{
 modelfilecalling.find().then((users)=>{
    console.log(users);
    res.send(users)
 })   
}