const express = require("express");

const Evaluation = require("../model/evaluation.model");

const router = express.Router();

// CRUD APIS
router.post("/evaluation" , async(req,res) =>{
    let evaluation = await Evaluation.create(req.body);

    return res.status(201).send(evaluation);
})

router.get("/evaluation" , async(req,res) =>{
    let evaluation = await Evaluation.find({}).sort({marks: -1}).limit(2).populate("user").populate("student").lean().exec();

    return res.status(200).send(evaluation);
})

router.delete("/evaluation/:id" , async(req,res) =>{
    let evaluation = await Evaluation.findByIdAndDelete(req.params.id);

    return res.status(200).send(evaluation);
})

router.patch("/evaluation/:id" , async(req,res) =>{
    let evaluation = await Evaluation.findByIdAndUpdate(req.params.id , req.body);

    return res.status(200).send(evaluation);
})

module.exports = router;