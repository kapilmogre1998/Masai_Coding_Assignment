const mongoose = require("mongoose");

const checkoutschema = new mongoose.Schema({
    name : {type:String , required : true},
    book : {type : mongoose.Schema.Types.ObjectId,
        ref : "book",
        required: true
    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "author",
        required : true
    }
})

module.exports = mongoose.model("checkout",checkoutschema);



