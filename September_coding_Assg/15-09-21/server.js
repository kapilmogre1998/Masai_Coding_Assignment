// const exp = require("express");
// const app = exp(); // server gets start

// let user = require("./MOCK_DATA.json");

// // app.get("/",(req,res) =>{  "/" -> It is the endpoint
// //     res.send(user);
// // })


// // app.get("/books",(req,res) =>{
// //     let match = req.query.id;
// //     // console.log(match)
// //     user.forEach((element)=>{
// //         if(element.id==match){
// //            res.send(element)
// //         }
// //     })
// // })

// app.use(exp.json()); //converting body json data into parse

// app.post("/hello", (req, res) => {
//     //  console.log(req.body);
//     res.send(req.body);
// })

// app.delete("/books/:id", (req, res) => {
//     let match = req.query.id;
//     user.forEach((element) => {
//         if (element.id == match) {
//             res.send(req.body);
//         }
//     })
// });
//     //express is listeining on this port
//     app.listen(3000, () => {
//         console.log(`This is port no: 3000`);
//     })


 const exp = require("express");
 const app = exp();
 
 const user = require("./MOCK_DATA.json");

 // 1st problem
 app.get("/", logger, (req,res) =>{
    // console.log(req.name); 
    res.send(user);
 });


 // 2nd problem
 app.use(exp.json());
 app.post("/books", logger,(req,res) =>{
     res.send(req.body);  
 })
 

 //3rd problem 
 app.get("/books/:id",logger,(req,res)=>{
    // res.send(user);
     let match = req.query.id;

     user.forEach((elmnt) =>{
         if(elmnt.id == match){
             res.send(elmnt);
         }
        // console.log("hi");
     }) 
 })


 //4th problem
 app.patch("/books/:id", logger , (req,res)=>{
    let match = req.query.id;

    user.forEach((elmnt) =>{
        if(elmnt.id == match){
            elmnt.first_name = "kapil";
            res.send(elmnt);
        }
    }) 
 })


 //5th problem
 app.delete("/books/:id", logger , (req,res)=>{
    let match = req.query.id;

     user.forEach((elmnt) =>{
         if(elmnt.id == match){
            elmnt = null;
            res.send(elmnt)
         }
     })   
 })


 function logger(req,res,next){
     console.log("logger");
     req.name = `api_requested_by : kapil`;
     next();
 }

 app.listen(3333,() =>{
     console.log("Hello");
 })