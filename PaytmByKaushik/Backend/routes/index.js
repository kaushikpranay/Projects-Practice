const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const accountRouter = require("./account");


// router.use("/api/v1", mainRouter);
router.use("api/v1/user", userRouter);
router.use("./account", accountRouter);







router.get('/', function (req, res, next){

})  

router.get('/signIn', (req, res, next)=>{

})

router.get('/signUp', (req, res, next)=>{

})

module.exports = router;