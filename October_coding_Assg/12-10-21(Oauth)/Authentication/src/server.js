const app = require("./index")

const connect = require("./config/dbs")

app.listen(3000, async function () {
    await connect();
    console.log("listening on port 3000");
})