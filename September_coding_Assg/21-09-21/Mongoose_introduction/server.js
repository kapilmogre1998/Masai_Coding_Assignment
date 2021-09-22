const exp = require("express");

const mongoose = require("mongoose");
//It removes plural from 
mongoose.pluralize(null);

const app = exp();  //starts the server

app.use(exp.json()); // It to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code

// It is used to connect express to mongodb by using mongoose.
const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//step1 : Create the schema
const productschema = new mongoose.Schema({
    id: { type: Number, require: true },
    movie_name: { type: String, require: true },
    movie_gene: { type: String, require: true },
    production_year:{type: Number, require:true},
    Budget : {type:Number, require:true}
})

//step2 : connect the schema to the product collection
// plural
//Movie store all data of collection name i.e movie_data
//product -> Is collection_name , productschema -> Is schema(In database class is called schema)
const Movie = mongoose.model("movie_data", productschema); //product -> mongoose make it plural products


//    CRUD APIS
//1) GET - get all movies  
// lean - it convert mongoose object to json object  and exec- complete the half promise to full promise
app.get("/movies", async (req, res) => {
    let movie = await Movie.find().lean().exec();  // db.product.find()
   // console.log(movie);
    return res.status(200).send(movie);
})


//2) POST  - Create a new movie
app.post("/movie", async (req, res) => {
    let movie = await Movie.create(req.body).lean().exec();  //db.product.insert() <- It is Mongodb

    return res.status(201).send(movie);
})

//3) get - get single movie
app.get("/movie/:id", async(req,res)=>{
    let movie = await Movie.findById(req.params.id);

    return res.status(200).send(movie);
})

//4 patch - Update a movie
app.patch("/movie/:id", async(req,res)=>{
    let movie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true});

    return res.status(204).send(movie);
})

//5) Delete - Delete a single product
app.delete("/moviedelete/:id", async(req,res) => {
    let movie = await Movie.findByIdAndDelete(req.params.id);  //db.product.remove(_id:"")

    return res.status(200).send(movie);
})


// //3) Patch - Update a product
// // no need to add lean and exec because findByIdandupdate will take care
// //new:true will refetch the data
// app.patch("/product/:id", async (req, res) => {
//     let product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});     //db.product.update({_id: ""},{$set:{}})

//     return  res.status(204).send(product);
// })


// //4) Delete - Delete a single product
// app.delete("/product/:id", async(req,res) => {
//     let product = await Product.findByIdAndDelete(req.params.id);  //db.product.remove(_id:"")

//     return res.status(200).send(product)
// })

// //5) get - get single user
// app.get("/product/:id", async (req,res)=>{
//     let product = await Product.findById(req.params.id);

//     return res.status(200).send(product);
// })

app.listen(5000, async (req, res) => {
    await connect();
    console.log("Listening on this port")
})
