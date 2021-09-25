const express = require("express");

const Student = require("../model/student.model");

const router = express.Router();

// CRUD APIS
router.post("/student" , async(req,res) =>{
    let student = await Student.create(req.body);

    return res.status(201).send(student);
})

router.get("/student" , async(req,res) =>{
    let student = await Student.find().populate("user").lean().exec();

    return res.status(200).send(student);
})

router.delete("/student/:id" , async(req,res) =>{
    let student = await Student.findByIdAndDelete(req.params.id);

    return res.status(200).send(student);
})

router.patch("/student/:id" , async(req,res) =>{
    let student = await Student.findByIdAndUpdate(req.params.id , req.body);

    return res.status(200).send(student);
})

module.exports = router;