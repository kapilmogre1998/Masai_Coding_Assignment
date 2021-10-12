require("dotenv").config();

const express = require("express");

const { body, validationResult } = require("express-validator");

const User = require("../model/user.model");

const jwt = require("jsonwebtoken");


const newToken = (user)=>{
    return jwt.sign({user},process.env.JWT_SECRET_KEY)
}

const router = express.Router();

router.post("/signup",
    body('name').isLength({ min: 3, max: 10 }),
    body('email').isEmail(),
    body('password').isLength(),
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).send({error : errors.array()});

        try{
            //check if email is exists or not
            let user = await User.findOne({email:req.body.email});

            //if yes
            if(user) return res.status(401).send("user already exist");

            //else create new user and store  
            user = await User.create(req.body);
            
            //create token for frontend 
            const token = newToken(user);

            res.status(200).send({user,token})
        }
        catch(err){
            console.log(err)
        }
    })

router.post("/signin", async(req,res)=>{

    try{
        let user = await User.findOne({email:req.body.email});

    if(!user) return res.status(400).send({message:"Please check email and password"});

    let userpassword = user.checkpassword(req.body.password);

    if(!userpassword) return res.status(400).send({message:"Please check email and password"});

    let token = newToken(user);

    res.status(400).send({user,token})
    }catch(err){
        res.status(400).send({message:"Please check email and password"})
    }

})    
module.exports = router;    