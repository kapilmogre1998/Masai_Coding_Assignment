const express = require("express");

const nodemailer = require("nodemailer")

const User = require("../models/user.model");

const router = express.Router();

router.get("/user", (req,res)=>{
  res.render("form");
})

router.get("", async (req,res)=>{
    let page = req.query.page;
    let size = req.query.size;

    let offset = (page-1)*size;   //(1-1)*10 = 0,(2-1)*10 = 10
    //skip(0) & limit(10)=>result from 1 to 10
    //skip(1) & limit(10)=>result from 11 to 20
    let users = await User.find().skip(offset).limit(10).lean().exec();
    let totalpages = await User.find().countDocuments();
    totalpages /= size;

    res.send({data:users,totalpages});
})


router.post("/single", (req,res)=>{
  
  let user = new User({
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email
  })

  let name = req.body.first_name;
  var message = {
    from: "kapil@gmail.com",
    to: req.body.email,
    subject: "Welcome to porter system",
    text: `Hi,${name}`,
    html: "<p>HTML version of the message</p>"
  };
  
 
var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "ce9e070c9ccde4",
      pass: "024ed9164d9f41",
    },
  });
  
   transporter.sendMail(message);
   res.send(user)
  
})


router.post("/multiple", (req,res)=>{
  
  let user = new User({
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email
  })

  let email2 = "nikhil@gmail.com"
  let array = ["nikhil@gmail.com","kiran@gmail.com","payal@gmail.com"];

  for(let mail of array){
    let name = req.body.first_name;
  var message = {
    from: "kapil@gmail.com",
    to: `${mail}`,
    subject: `${name} has registerd with us`,
    text: `Please welcome ${name}`,
    html: "<p>HTML version of the message</p>"
  };
  
 
var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "ce9e070c9ccde4",
      pass: "024ed9164d9f41",
    },
  });
  transporter.sendMail(message);
  }

   res.send(user)
  
})

// var message = {
//     from: "kapil@gmail.com",
//     to: "receiver@sender.com",
//     subject: "Message title",
//     text: "Plaintext version of the message",
//     html: "<p>HTML version of the message</p>"
//   };
  
 
// var transporter = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 587,
//     secure: false, // upgrade later with STARTTLS
//     auth: {
//       user: "ce9e070c9ccde4",
//       pass: "024ed9164d9f41",
//     },
//   });
  
//    transporter.sendMail(message)
  
module.exports = router;