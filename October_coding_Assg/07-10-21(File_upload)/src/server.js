const express = require("express");

// const app = require("./index");

const connect = require("./config/dbs");


const app = express();

app.use(express.json());

const productcontroller = require("./controller/product.controller");
app.use("",productcontroller);

module.exports = app;

app.listen(3344, async(req,res)=>{
    await connect();
    console.log(`Listening on the port : 3344`);
})