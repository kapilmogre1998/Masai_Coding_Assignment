const express = require("express");
const {body,validationResult} = require("express-validator")

const router = express.Router();
const User = require("../model/user.model")

router.post("/user", 
body('first_name').isLength({min:2}),
body('last_name').isLength({min:2}),
body('email').isEmail(),
body('pincode').isLength({min:6 , max:6}),
body('age').custom((value) =>{
    if(value>0 && value<=100){
        return true;
    }
    else
    return false;
}),
body('gender').custom((value)=>{
    if(value === "male" || value === "female" || value === "others")
    return true;
    else
    return false;
}),
async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    else{
        const user = await User.create({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email : req.body.email,
            pincode:req.body.pincode,
            age : req.body.age,
            gender : req.body.gender
        })
        return res.send(user);
    }
    
})

module.exports = router;