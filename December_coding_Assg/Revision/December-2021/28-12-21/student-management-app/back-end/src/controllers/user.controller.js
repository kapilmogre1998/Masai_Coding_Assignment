const express = require('express');
const User = require('../models/user.module');

const router = express.Router();

router.post("/login",async(req,res)=>{
    try{
        let user = await User.findOne({email: req.body.email,password: req.body.password })
        
        if(!user)
        return res.status(400).send({message:"Please check email and password"});
        
        let token = "fhghfbfjdjbd";
        return res.status(200).send({token})
    }
    catch(err){
        return console.log("error")
    }
})

router.post('/register',async(req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email})

        console.log(req.body)
        if(user)
        return res.status(400).send("user already exists");
        
        user = await User.create(req.body)

        return res.status(400).send({user})
    }catch(err){
        return res.status(400).send("error in signin")
    }
})

router.get("/",async(req,res)=>{
    let user = await User.find({}).lean().exec()

    res.status(400).send({user})
})


router.delete("/:id", async(req,res)=>{
    let user = await User.findByIdAndDelete(req.params.id)

    return res.status(400).send({user})
})

module.exports = router;