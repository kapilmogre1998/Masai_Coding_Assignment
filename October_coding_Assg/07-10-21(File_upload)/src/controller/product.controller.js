const express = require("express");

const Product = require("../module/product.model");

const router = express.Router();

const upload = require("../utils/file-upload");

// Router for uploading single file
router.post("/single",upload.single("product_image") ,async(req,res)=>{
    console.log(product_image)
    try{
        const product = await Product.create({
            title : req.body.title,
            price : req.body.price,
            img : req.file.path    //multer is giving file path
        })
        res.status(201).send(product);
    }
   catch(err){
       res.status(400).send(err)
   }
})

// Router for uploading multiple files
router.post("/multiple",upload.array("product_images") ,async(req,res)=>{
    const files = req.files.map((file) => file.path)  //multer is giving file path
    try{
        const product = await Product.create({
            title : req.body.title,
            price : req.body.price,
            img : files
        })
        res.status(201).send(product);
    }
   catch(err){
       res.status(400).send(err)
   }
})

module.exports = router;