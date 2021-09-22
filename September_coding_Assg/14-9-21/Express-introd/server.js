
const exp = require("express");

const app = exp();

const usersdata = require("./mock_data.json");

app.get("/", function(req,res){
 //   console.log("requset,respond"+req,res);
    res.send("hello from express");
});

app.get("/book_title",function(req,res){
   
    usersdata.forEach(({email})=>{
        res.send(email);
    })
})

app.listen(2233,function (){
   // console.log("port gets listen");
})