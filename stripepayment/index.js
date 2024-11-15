const express = require('express');

const bodyparser = require('body-parser');
const app = express();
const path = require('path')
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
var Publishable_key = "pk_test_51NzuH0SGp41m30vUAeryKVEm2UHkvf4RqfZkmICPi4viCWbxOp9Nfc1o3OVuf28cYIZrZKk8JwUkGFY9QXsggKl400cKIxUQZc";
const Secret_key = "sk_test_51NzuH0SGp41m30vUyUGsnRbqECRBQNafiv6juEhUsYHSpm5CHnQVg8y0jEBSlmr0X9gcyzwwMCJgJsBcxW7hjhgV00Tmfduf8T"
const stripe = require('stripe')(Secret_key);

app.get('/',(req,res)=>{
    res.render('payment',{key:Publishable_key})
})

app.post('/payment',function (req,res){
 
    stripe.customers.create({
        description:'My First Test Customer (created for API docs at https://www.stripe.com/docs/api)',
      }).then(()=>{
        return stripe.charges.create({
            amount: 3000,
            currency: 'INR',
            source: 'tok_visa',
            description:'My First Test Customer (created for API docs at https://www.stripe.com/docs/api)',
          }).then(()=>{
            res.send("success")
          })
          .catch((err)=>{
            res.send(err);
          })
      })

})

app.listen(2050,()=>{
    console.log("port connected");
})