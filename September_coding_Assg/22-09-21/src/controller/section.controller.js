const express = require("express");

const Section = require("../model/section.model");

const route = express.Router();

route.post("",  async (req,res) =>{
    let section = await Section.create(req.body);

   return res.status(201).send(section);
})

route.get("",async (req,res)=>{
   let sections = await Section.find().populate("author").populate("book").lean().exec();

   return res.status(200).send(sections);
})

route.patch("/:id",async (req,res)=>{
   let section = await Section.findByIdAndUpdate(req.params.id , req.body, {new:true});

   return res.status(200).send(section);
})

route.delete("/:id", async (req,res)=>{
   let section = await Section.findByIdAndDelete(req.params.id);

   return res.status(200).send(section);
})


module.exports = route;