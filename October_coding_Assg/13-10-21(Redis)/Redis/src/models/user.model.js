const mongoose = require("mongoose");

const weatherforecast = new mongoose.Schema({
    name : {type:String,required:true},
    email: {type:String,required:true},
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("user",userSchema);

