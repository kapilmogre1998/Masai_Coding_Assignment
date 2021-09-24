const mongoose = require("mongoose");

const authorschema = new mongoose.Schema({
    first_name : {type : String, required:true},
    last_name : {type:String,required:true}
},{
    versionKey:false
})

module.exports = mongoose.model("author",authorschema);
