const mongoose = require("mongoose");


const sectionschema = new mongoose.Schema({
    sectionName : {type:String,required:true},
    author : {type : mongoose.Schema.Types.ObjectId , 
        ref: "author",
        required:true
    },
    book : {type:mongoose.Schema.Types.ObjectId,
        ref : "book",
        required:true
    }
},{
    versionKey : false,
    timestamps:true
})

module.exports = mongoose.model("sections",sectionschema);