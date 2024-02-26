const express = require("express")
const zod = require("zod");
const {User} = require("../db/db");
const jwt = require("jsonwebtoken");
const {JWT_SECERT} = require("../config");
const router = express.Router();
const {authMiddleware} = require("../middleware");
const { Account } = require("../db/db");

const signupBody = zod.object({
    username: zod.String,
    firstName: zod.String,
    lastname: zod.String,
    password: zod.password,
    phone: zod.phone
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

    await Account.create({
        userId, 
        balance:1+Math.random()*1000
    })

    const token = jwt.sign({
        userId
    }, JWT_SECERT);

    res.json({
        message: "User Created Successfully", 
        token: token
    })
})



const signinBody = zod.object({
    username: zod.String,
    password: zod.String
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

const updateBody = zod.object({
    password: zod.password,
    firstName: zod.String,
    lastname: zod.String
})


router.put("/", authMiddleware, async(req, res)=>{
    const {success} = updateBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne({_id: req.userId}, req.body)

    res.json({
        message: "Updated successfully"
    })
})




router.get("/bulk", async (req, res)=>{
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user =>({
            username: user.username,
            firstName: user.firstName,
            lastname: user.lastname,
            _id: user._id
        }))
    })
})


module.exports = router;