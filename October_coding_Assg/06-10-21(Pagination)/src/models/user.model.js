const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id:{type:Number,required:false},
    first_name : {type:String,required:true},
    last_name : {type:String,required:true},
    email: {type:String,required:true},
    gender: {type:String,required:false}
})

module.exports = mongoose.model("user",userSchema);

