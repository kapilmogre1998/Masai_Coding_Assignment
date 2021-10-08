const express = require("express");

const app = express();

module.exports = app;

app.use(express.json());

app.use(express.urlencoded({extended:false}))

const userscontroller = require("./controller/user.controller");
app.use("",userscontroller);