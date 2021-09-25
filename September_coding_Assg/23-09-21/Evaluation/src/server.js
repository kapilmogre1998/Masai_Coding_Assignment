const express = require("express");

const mongoose = require("mongoose");

const connect = () =>{
    return mongoose.connect("mongodb://127.0.0.1:27017/evaluation")
}
const app = express();

app.use(express.json());

const User = require("./model/user.model");

const usercontroller = require("./controller/user.controller");
app.use("",usercontroller);

const studentcontroller = require("./controller/student.controller");
app.use("",studentcontroller);

const evaluationschema = require("./controller/evaluation.controller");
app.use ("",evaluationschema);

app.listen(3500, async (req,res) =>{
    await connect();
    console.log("listening on 3500 port");
})