const connect = require("./configs/dbs");

const app = require("./index");

app.listen(4100, async(req,res)=>{
    await connect();
    console.log("Listening on the port: 4100");
})