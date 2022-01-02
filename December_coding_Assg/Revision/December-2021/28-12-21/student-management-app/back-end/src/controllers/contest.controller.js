const express = require('express');
const { off } = require('../models/contest.models');
const Contest = require('../models/contest.models');

const router = express.Router();

router.post("/", async(req,res)=>{
    let contest = await Contest.create(req.body);

    res.status(200).send({contest})
})

router.get("/pagination", async(req,res)=>{
    let page = req.query.page || 1;
    let size = 5;

    let offset = (page - 1) * size;
    let contests = await Contest.find({}).skip(offset).limit(size).lean().exec();
    
    res.status(200).send({contests})
    // let totalpages = await User.find().countDocuments();
    // totalpages = Math.ceil(totalpages / size);
    // res.status(200).send({contests});
})

router.get("/", async(req,res)=>{
    let contests = await Contest.find({}).lean().exec();

    res.send({contests})
})

router.get("/sort", async(req,res)=>{
    let contests = await Contest.find({}).sort({[req.query.text]:req.query.order}).lean().exec();

    res.send({contests});
})

router.delete("/:id", async(req,res)=>{ 
    let contest = await Contest.findByIdAndDelete(req.params.id)

    res.status(200).send({contest})
})

module.exports = router;

// router.get('/type',async(req,res)=>{
//     let page = req.query.page || 1;
//     let size = 5;

//     let offset = (page - 1) * size;
//     let contest = await Contest.find({type: req.query.type}).skip(offset).limit(size).lean().exec();

//     return res.status(200).send({contest})
// })

// router.get("/increasing", async(req,res)=>{
//     let page = req.query.page || 1;
//     let size = 5;

//     let offset = (page - 1) * size;
//     let contests = await Contest.find({}).skip(offset).limit(size).lean().exec();
    
//     res.status(200).send({contests})
// })

// router.get("/decreasing", async(req,res)=>{
//     let page = req.query.page || 1;
//     let size = 5;

//     let offset = (page - 1) * size;
//     let contests = await Contest.find({}).sort({deadline: 1}).lean().exec()
//     res.status(200).send({contests})
// })