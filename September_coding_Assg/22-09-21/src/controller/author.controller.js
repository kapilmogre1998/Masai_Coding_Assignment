
const express = require("express");

const Author = require("../model/author.model");

const route = express.Router();

route.post("",  async (req,res) =>{
    let author = await Author.create(req.body);

   return res.status(201).send(author);
})

route.get("",async (req,res)=>{
   let authors = await Author.find().lean().exec();

   return res.status(200).send(authors);
})

route.patch("/:id",async (req,res)=>{
   let author = await Author.findByIdAndUpdate(req.params.id , req.body, {new:true});

   return res.status(200).send(author);
})

route.delete("/:id", async (req,res)=>{
   let author = await Author.findByIdAndDelete(req.params.id);

   return res.status(200).send(author);
})

module.exports = route;