const express = require("express");

const Product = require("../module/product.model");

const router = express.Router();

const upload = require("../utils/file-upload");

router.post("/single",upload.single("product_image") ,async(req,res)=>{
    
    const product = await Product.create({
        title : req.body.title,
        price : req.body.price,
        img : req.file.path
    })

    res.send(product);
})

module.exports = router;