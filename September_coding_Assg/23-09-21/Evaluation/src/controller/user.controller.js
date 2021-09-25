const express = require("express");

const router = express.Router();

const User = require("../model/user.model")

   //CRUD APIS
router.post("/user", async (req,res) =>{
    let user = await User.create(req.body);

    return res.status(201).send(user);
})

router.get("/user" , async(req,res)=>{
    let user = await User.find().lean().exec();

    return res.status(200).send(user);
})

router.patch("/user/:id" , async(req,res)=>{
    let user = await User.findByIdAndUpdate(req.params.id , req.body);

    return res.status(200).send(user);
})

router.delete("/user/:id" , async(req,res)=>{
    let user = await User.findByIdAndDelete(req.params.id);

    return res.status(200).send(user);
})


module.exports = router;