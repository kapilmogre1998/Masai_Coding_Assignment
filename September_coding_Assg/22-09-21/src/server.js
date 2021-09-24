const express = require("express");

const app = express();

app.use(express.json());
const mongoose = require("mongoose");

const connect = require("./config/db.js");

// const Author = require("./model/author.model");

// const Book = require("./model/book.model");

// const Section = require("./model/section.model");

// const Checkout = require("./model/checkout.model");

const authorcontroller = require("./controller/author.controller");
app.use("/author",authorcontroller);

const bookcontroller = require("./controller/book.controller");
app.use("/book",bookcontroller);

const sectioncontroller = require("./controller/section.controller");
app.use("/section",sectioncontroller);

// const checkoutcontroller = require("./controller/checkout.controller");
// app.use("/book",checkoutcontroller);

app.listen(3434, async (req,res) =>{
    await connect();
    console.log(`listening on 3434 port`);
})

// const authorschema = new mongoose.Schema({
//     first_name : {type : String, required:true},
//     last_name : {type:String,required:true}
// },{
//     versionKey:false
// })

// const Author = mongoose.model("author",authorschema);

// const bookschema = new mongoose.Schema({
//     name : {type:String,required:true},
//     body : {type:String,required:true},
//     author : {type:mongoose.Schema.Types.ObjectId ,
//          ref:"author" ,
//           required:true}
// },{
//     versionKey:false,
//     timestamps:true
// })

// const Book = mongoose.model("book",bookschema);

// const sectionschema = new mongoose.Schema({
//     sectionName : {type:String,required:true},
//     author : {type : mongoose.Schema.Types.ObjectId , 
//         ref: "author",
//         required:true
//     },
//     book : {type:mongoose.Schema.Types.ObjectId,
//         ref : "book",
//         required:true
//     }
// },{
//     versionKey : false,
//     timestamps:true
// })

// const Section = mongoose.model("sections",sectionschema);

// const checkoutschema = new mongoose.Schema({
//     name : {type:String , required : true},
//     book : {type : mongoose.Schema.Types.ObjectId,
//         ref : "book",
//         required: true
//     },
//     author : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "author",
//         required : true
//     }
// })

// const Checkout = mongoose.model("checkout",checkoutschema);



//CRUD APIS for author
// app.post("/author",  async (req,res) =>{
//      let author = await Author.create(req.body);

//     return res.status(201).send(author);
// })

// app.get("/author",async (req,res)=>{
//     let authors = await Author.find().lean().exec();

//     return res.status(200).send(authors);
// })

// app.patch("/author/:id",async (req,res)=>{
//     let author = await Author.findByIdAndUpdate(req.params.id , req.body, {new:true});

//     return res.status(200).send(author);
// })

// app.delete("/author/:id", async (req,res)=>{
//     let author = await Author.findByIdAndDelete(req.params.id);

//     return res.status(200).send(author);
// })


//CRUD APIS for books
// app.post("/book",  async (req,res) =>{
//     let book = await Book.create(req.body);

//    return res.status(201).send(book);
// })

// app.get("/book", async (req,res) =>{
//    let book = await Book.find().populate("author").populate("author").lean().exec();
//  //populate contains key 
//    return res.status(200).send(book);
// })

// app.patch("/book/:id",async (req,res)=>{
//    let author = await Book.findByIdAndUpdate(req.params.id , req.body, {new:true});

//    return res.status(200).send(author);
// })

// app.delete("/book/:id", async (req,res)=>{
//    let author = await Book.findByIdAndDelete(req.params.id);

//    return res.status(200).send(author);
// })

// app.get("/book/:id",async (req,res)=>{
//     let book = await Book.findById(req.params.id).populate("author");

//     return res.status(200).send(book);
//  })


 //CRUD APIS by section
//  app.post("/section",  async (req,res) =>{
//     let section = await Section.create(req.body);

//    return res.status(201).send(section);
// })

// app.get("/section",async (req,res)=>{
//    let sections = await Section.find().populate("author").populate("book").lean().exec();

//    return res.status(200).send(sections);
// })

// app.patch("/section/:id",async (req,res)=>{
//    let section = await Section.findByIdAndUpdate(req.params.id , req.body, {new:true});

//    return res.status(200).send(section);
// })

// app.delete("/section/:id", async (req,res)=>{
//    let section = await Section.findByIdAndDelete(req.params.id);

//    return res.status(200).send(section);
// })


