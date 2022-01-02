const mongoose = require('mongoose');

const StudentSchema =  new mongoose.Schema({
    name: {type:String,required:true},
    age:{type:String,required:true},
    gender: {type:String,required:true},
    contact:{type:String,required:true},
    city:{type:String,required:true}
})

const Student = mongoose.model("student",StudentSchema);

module.exports = Student;