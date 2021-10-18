const express = require("express");

const app = express();

module.exports = app;

app.use(express.json());

const userscontroller = require("./controller/user.controller");
app.use("",userscontroller);

