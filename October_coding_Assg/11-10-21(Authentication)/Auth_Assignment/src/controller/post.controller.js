const express = require("express");

const router = express.Router();

const authenticate = require("../middleware/post.authenticate")

const Post = require("../model/post.model")

router.post("", async(req,res)=>{
    let post = await Post.create(req.body);

    res.status(201).send(post);
})

router.get("",authenticate,async(req,res)=>{
    let post = await Post.find();

    res.status(201).send(post);
})

module.exports = router;