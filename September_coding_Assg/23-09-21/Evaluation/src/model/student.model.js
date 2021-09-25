const mongoose = require("mongoose");

const studentschema = new mongoose.Schema({
    "roll_id" : {type: Number , required:true},
    "current_batch" : {type : String,required: true},
    "user" : {type: mongoose.Schema.Types.ObjectId ,
        required :true,
        ref: "user"
    }
},{
    versionKey : false
})

const Student = mongoose.model("student",studentschema);

module.exports = Student;
