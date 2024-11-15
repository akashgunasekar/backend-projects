const modelfilecalling  = require('../model/model');

exports.create = (req,res)=>{
    const check = new modelfilecalling({
        firstname:req.body.firstname,
        email:req.body.email,
        number:req.body.number
    })

    check.save().then((dd)=>{
        console.log(dd);
        res.redirect('/thankyou')
    })
}

exports.find= (req,res)=>{
    modelfilecalling.find()
    .then((users)=>{
        res.send(users)
    })
}