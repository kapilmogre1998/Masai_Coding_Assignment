const mongoose = require("mongoose");

const evaluationschema = new mongoose.Schema({
    date_of_evaluation : {type:String,required:true},
    instructor : {type:String , require:true},
    marks : {type:String,required:true},
    topic : {type:String,required:true},
    user:{type:mongoose.Schema.Types.ObjectId ,ref:"user",required:true}, //ref :- CollectionName
    student: {type:mongoose.Schema.Types.ObjectId, ref:"student",required:true}
},{
    versionKey : false
})


const Evaluation = mongoose.model("evaluation",evaluationschema);

module.exports = Evaluation;