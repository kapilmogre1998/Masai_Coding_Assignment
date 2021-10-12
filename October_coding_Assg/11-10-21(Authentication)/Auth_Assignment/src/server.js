const express = require("express");
const connect = require("./config/dbs");

const app = express();
app.use(express.json());

const {register,login} = require("./controller/auth.controller")
const productcontroller = require("./controller/product.controller")
const usercontroller = require("./controller/user.controller");
const postcontroller = require("./controller/post.controller")

app.use("/post",postcontroller)
app.use("",usercontroller)
//app.use("",productcontroller)

app.post("/register",register);
app.post("/login",login);

app.listen(5566, async(req,res)=>{
    await connect();
    console.log("Listening on the port 5566");
})