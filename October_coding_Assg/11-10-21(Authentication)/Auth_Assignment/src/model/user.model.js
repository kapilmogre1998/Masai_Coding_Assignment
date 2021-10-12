const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userschema = new mongoose.Schema({
   name:{type:String,required:true},
   email : {type:String,required:true,unique:true},
   password: {type:String,required:true,minlength:8,maxlength:20}
},{
    versionKey:false,
    timestamps:true
})



// userschema.pre("save", function(next){
//     if(!this.isModified("password")) return next();

//     const hash = bcryptjs.hashSync(this.password,8);
//     this.password = hash;
//     return next();
// })


// userschema.methods.checkpassword = function(password){
//     return bcryptjs.compareSync(password,this.password);
// }
//create and update//
//Middleware -> In this we can't use arrow function
//In arrow function this refer to window object
userschema.pre("save",function(next){
    if(!this.isModified("password")) return next();

    const hash = bcryptjs.hashSync(this.password, 8);
    this.password = hash;
    return next();
})

userschema.methods.checkpassword = function(password){
    //password - we r getting password from user and comparing with the password stored in server
    return  bcryptjs.compareSync(password,this.password);
}
module.exports = mongoose.model("user",userschema);