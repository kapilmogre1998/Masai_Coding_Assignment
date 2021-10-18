const express = require("express");

require("dotenv").config();

const User = require("../model/user.model")

const jwt = require("jsonwebtoken");

const newToken = (user) => {
    return jwt.sign({user}, process.env.JWT_SECRET_KEY);
}

const register = async(req,res)=>{
    try{
        //check if email already exists or not
        let user = await User.findOne({email:req.body.email});
        
        // if yes then we throw an error that email already exists
        if(user) return res.status(400).send({message:"please check your email and password"});

        // else we will create the user with the email and password 
        // but before saving the password we need to hash it
        user = await User.create(req.body);

        //we will create token
        const token = newToken(user);

        res.status(200).send({user,token})

    }catch(err){
        res.status(500).send({message:"sorry for inconvience please try again later"})
    }
}

const login = async(req,res)=>{
    try{
        //First we will check if user with same email exists 
        let user = await User.findOne({email:req.body.email});

        //if not we throw an error
        if(!user) return res.status(400).send({message:"please check your email and password"});

        //if exists then we will match password
        let match = user.checkpassword(req.body.password);

        //if not match then we will throw an error
        if(!match) return res.status(400).send({message:"please check your email and password"});

        //else we will create a new token for that user
        let token = newToken(user);

        //we will send the tokne to frontend
        res.status(200).send({user,token});
    }catch(err){ 
        return res.status(400).send({message:"please check your email and password"});
    }
}

module.exports = {register,login,newToken}