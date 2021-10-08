const express = require("express");
const connect = require("./config/dbs");

const app = express();
app.use(express.json())

const usercontroller = require("./controller/user.controller");
app.use("",usercontroller);

app.listen(5566, async(req,res)=>{
    await connect();
    console.log("Listening on the port 5566");
})