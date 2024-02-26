const express = require("express");
const router = express.Router();

const userRouter = require("./user");
router.use("/user", userRouter);
router.get('/', function (req, res, next){

})

router.get('/signIn', (req, res, next)=>{

})

router.get('/signUp', (req, res, next)=>{

})

module.exports = router;