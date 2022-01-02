const express = require('express');
const Student = require('../models/students.model');

const router = express.Router();

router.post("/",async(req,res)=>{
    let student = await Student.create(req.body);

    res.status(200).send({student});
})

router.get("/sort/name",async(req,res)=>{
    let students = await Student.find({}).sort({[req.query.text]:req.query.order}).lean().exec();

    res.status(200).send({students});
})

router.get("/",async(req,res)=>{
    let students = await Student.find({}).lean().exec();

    res.status(200).send({students});
})

router.get("/pagination",async(req,res)=>{
    let page = req.query.page || 1;
    let size =  5;
    
    let offset = (page - 1) * size; 
    let student = await Student.find({}).skip(offset).limit(size).lean().exec();
    res.status(200).send({student});    
})

module.exports = router;