//now create the segma for mongodb

/*
    todo{
        title: string,
        descriptpion: string, completed: boolean
    }
*/

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://KaushikPranay:lKoMJlTn6TH5qDMa@cluster0.tdtpqyl.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String, 
    description: String, 
    completed: Boolean
})

const todo = mongoose.mode('todos', todoSchema);

module.exports = {
    todo
}
