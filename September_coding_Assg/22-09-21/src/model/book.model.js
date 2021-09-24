const mongoose = require("mongoose");

const bookschema = new mongoose.Schema({
    name : {type:String,required:true},
    body : {type:String,required:true},
    author : {type:mongoose.Schema.Types.ObjectId ,
         ref:"author" ,
          required:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("book",bookschema);