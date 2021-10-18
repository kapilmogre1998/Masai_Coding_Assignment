const express = require("express");

const nodemailer = require("nodemailer")

const User = require("../models/user.model");

const client = require("../configs/redis");
const { json } = require("express");
const { route } = require("..");

const router = express.Router();

// router.post("/user",async(req,res)=>{
//   let user = await User.create(req.body);
//   res.status(200).send(user);
// })


router.get("/users", (req, res) => {
  client.get("users", async (err, users) => {
    //If err show error message
    if (err) return res.status(500).send({ message: err });

    //If redis/cache contains data spend the respond. parse it before sending respond parse the data(In js object)
    if (users) return res.status(200).send({ redis_collection: JSON.parse(users) });

    //If not then fetch the data from server
    try {
      if (!users) {
        let user_data = await User.find({}).lean().exec();

        client.set("users", JSON.stringify(user_data));

        res.status(200).send({ db_collection: user_data });
      }
    }
    catch (err) {
      return res.status(500).send({ status: "failed", message: "something went wrong" });
    }
  })
})


router.post("/user", async (req, res) => {
  try {
    let user = await User.create(req.body);

    let users = await User.find({}).lean().exec();

    client.set("users", JSON.stringify(user));

    return res.status(200).send({ db_collection: user })
  }
  catch (err) {
    return res.status(500).send({status:"failed",message: err})
  }
})

//Get Request
router.get("/user/:id", async (req, res) => {
  client.get(`users.${req.params.id}`, async (err, users) => {
    if (err) return res.status(500).send({ message: err });

    if (users) return res.status(200).send({ redis_collection: JSON.parse(users) });

    try{
      if (!users){
        let user = await User.findById(req.params.id).lean().exec();
        console.log(user)

        client.set(`users.${req.params.id}`, JSON.stringify(user));

        return res.status(200).send({db_collection:user})
        }
      }   
    catch(err){
      return res.status(500).send({status:"failed",message: err})
    }
  })
})


//Patch Request
router.patch("/user/:id", async(req,res)=>{
    let user = await User.findByIdAndUpdate(req.params.id,req.body).lean().exec();

    let users = await User.find({}).lean().exec();

    client.set("users", JSON.stringify(users));

    return res.status(200).send({ db_collection: user })
})


//delete
router.delete("/user/:id", async(req,res)=>{
  let user = await User.findByIdAndDelete(req.params.id);

  let users = await User.find({}).lean().exec();

  client.set("users", JSON.stringify(users));

  return res.status(200).send({db_collection:user})
})

// router.get("/users",async(req,res)=>{

//   //First we will check is data predent in the redis 
//   client.get("posts", async(err,posts)=>{

//     if(err) return res.status(500).send({message:err});

//     //If yes then show the data
//     if(posts) return res.status(201).send({status:"success",posts: JSON.parse(posts)});

//     try{
//       //If not fetch the data from server
//       let postdata = await User.find({}).lean().exec();
//       //Then save in redis
//       client.set("posts", JSON.stringify(postdata));
//       // Then return that data
//       res.status(200).send({posts:postdata})
//     }
//     catch(err){
//       return res.status(500).send({status:"failed",message: err})
//     }
//   })
// })
module.exports = router;