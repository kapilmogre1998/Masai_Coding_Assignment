const express = require("express");

const Book = require("../model/book.model");
const Author = require("../model/author.model");

const route = express.Router();

route.post("",  async (req,res) =>{
    let book = await Book.create(req.body);

   return res.status(201).send(book);
})



route.get("", async (req,res) =>{
   let book = await Book.find().populate("author").lean().exec();
 //populate contains key 
   return res.status(200).send(book);
})

route.patch("/:id",async (req,res)=>{
   let book = await Book.findByIdAndUpdate(req.params.id , req.body, {new:true});

   return res.status(200).send(book);
})

route.delete("/:id", async (req,res)=>{
   let book = await Book.findByIdAndDelete(req.params.id);

   return res.status(200).send(book);
})

route.get("/:id",async (req,res)=>{
   let book = await Book.find({author: req.params.id}).lean().exec();
   let author = await Author.find({author: req.params.id}).lean().exec();

    return res.status(200).send({book,author});
 })


module.exports = route; 