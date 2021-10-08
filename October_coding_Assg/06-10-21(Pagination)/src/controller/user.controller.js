const express = require("express");

const nodemailer = require("nodemailer")

const User = require("../models/user.model");

const router = express.Router();

router.get("/user", (req, res) => {
  res.render("form");
})

router.get("/pagination", async (req, res) => {
  let page = req.query.page || 1;
  let size = req.query.size || 10;

  let offset = (page - 1) * size; //(1-1)*10 = 0,(2-1)*10 = 10
  //skip(0) & limit(10)=>result from 1 to 10
  //skip(1) & limit(10)=>result from 11 to 20
  let users = await User.find().skip(offset).limit(10).lean().exec();
  let totalpages = await User.find().countDocuments();
  totalpages = Math.ceil(totalpages / size);

  res.send({ data: users, totalpages });
})


router.post("/single",  (req, res) => {

  let user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  })

  let name = req.body.first_name;
  var message = {
    from: "kapil@gmail.com",
    to: req.body.email,
    subject: "Welcome to porter system",
    text: `Hi,${name}`,
    html:"<p>Hi,name</p><button>confirm your email address</button>"
  };

  let array = ["payal@gmail.com","nikhil@gmail.com","karan@gmail.com"];

  
    var message2 = {
      from: "kapil@gmail.com",
      to : array,
      subject: `${name} ${req.body.last_name} has registerd with us`,
      text: `Please welcome ${name} ${req.body.last_name}`,
      html: "<p>HTML version of the message</p>"
    }
  
  


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
  transporter.sendMail(message2);
  res.send(user);
})

module.exports = router;