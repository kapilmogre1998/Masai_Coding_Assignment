const connect = require("./configs/dbs");

const app = require("./index");

app.set("view engine","ejs");


app.listen(4000, async(req,res)=>{
    await connect();
    console.log("Listening on the port: 2345");
})