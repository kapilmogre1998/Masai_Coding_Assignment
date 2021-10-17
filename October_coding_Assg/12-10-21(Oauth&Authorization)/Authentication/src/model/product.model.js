const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    image_urls: [{type: String, required: true}],
    user :{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("product", productSchema); // products