const express = require('express');
var cors = require('cors')

const connect = require('./config/db')

const app = express();

app.use(express.json());

app.use(cors({origin: 'http://localhost:3002', credentials: true}))

const studentController = require('./controllers/student.controller');
app.use("/student",studentController)

const contestController = require('./controllers/contest.controller');
app.use("/contest",contestController);

const userController = require('./controllers/user.controller');
app.use('/user',userController)

app.listen(3002, async(req,res)=>{
    await connect();
    console.log("listening on port 3002")
})