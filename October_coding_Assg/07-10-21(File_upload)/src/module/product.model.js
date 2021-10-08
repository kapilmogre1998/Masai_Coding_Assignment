const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title:{type:String,required:true},
    price : {type:Number,requires:true},
    img :{type:String,required:true}
})


const Product = mongoose.model("product",productSchema);

module.exports = Product;