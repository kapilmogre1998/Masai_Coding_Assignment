const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    first_name : {type:String,required:true},
    last_name : {type:String , require:true},
    gender:{type:String,require:true},
    date_of_birth:{type:String,require:true}
},{
    versionKey : false,
    timestamps: true
})


const User = mongoose.model("user",userschema);

module.exports = User;