const mongoose = require("mongoose");
const zod = require("zod");
mongoose.connect("mongodb+srv://KaushikPranay:xvCDracJaRzGEipj@cluster0.gswnwhf.mongodb.net/paytm");
const userSchema = new mongoose.Schema({
    username: {
        type: zod.String.email,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30
    },
    password:{
        type: zod.password,
        required: true,
        minlength: 8
    },
    firstName: {
        type: zod.username,
        required: true,
        trim: true,
        maxlength: 50
    },
    lastname: {
        type: zod.String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    }, 
    balance: {
        type: Number, 
        required: true
    }
});


const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);






module.exports = {
    User,
    Account
};