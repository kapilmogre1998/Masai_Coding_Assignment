const  Mongoose  = require("mongoose");

const connect = ()=>{
    return Mongoose.connect("mongodb://127.0.0.1:27017/pagination");
}

module.exports = connect;