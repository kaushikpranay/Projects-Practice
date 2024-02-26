const express = require("express")
const zod = require("zod");
const {User} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECERT} = require("../config");
const router = express.Router();


const signupBody = zod.object({
    username: zod.String().email,
    firstName: zod.String(),
    lastname: zod.String(),
    password: zod.password(),
    phone: zod.phone()
})

router.post("/signup", async (req, res)=>{
    const {success} = signupBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message: "Email already taken / Incoorect inputs"
        })
    }
    const existingUser = await User.findOne({
        username: req.body.username
    })

    if(existingUser){
        return res.status(411).json({
            message: "Email already taken/ Inccorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastname: req.body.lastname,
        phone: req.body.lastname
    })
    

    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECERT);

    res.json({
        message: "User Created Successfully", 
        token: token
    })
})



const signinBody = zod.object({
    username: zod.String().email,
    password: zod.String()
})

router.post("/signin", async(req, res)=>{
    const {success} = signinBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Wrong Email or Password"
        })
    }
    
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if(user){
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECERT);
        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({
        message: "Error while Logging in.(Try after sometime)"
    })
})

module.exports = router;