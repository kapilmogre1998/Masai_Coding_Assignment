const mongoose = require('mongoose');

const ContestSchema = new mongoose.Schema({
    type: {type:String,required:true},
    title: {type:String,required:true},
    deadline: {type:String,required:true},
    tags: {type: String,required:false},
    date: {type:String,required:false},
    time:{type:String,required:false}
},{
    versionKey:false,
    timestamps:true
})

const Contest = mongoose.model('contest',ContestSchema);

module.exports = Contest;