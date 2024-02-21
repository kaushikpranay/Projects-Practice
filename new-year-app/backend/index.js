//write basic express boilerplate code, 
//with express.json() middleware
//step 2: zod that use for validation
// body{
//     title: String, 
//     description: String
// } ----> npm install zod

const express = require("express")
const app = express();
const {createTodo, updateTodo} = require("./types");

app.use(express.json());
app.post("/todo", async function(req, res){
    const createPatLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPatLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "wrong input"
        })
        return; 
    }
    await todo.create({
        title: createPatLoad.title, 
        description: createPatLoad.description, 
        completed: false
    })

    res.json({
        msg: "user created"
    })
})

app.get("/todos", async function(req, res){
    const todo = await todos.find({});
    
    res.json({
        todos: []
    })
    
})

app.put("/completed", async function(req, res){
    const updateTodoLoad = req.body;
    const parsePayLoad = updateTodo.safeParse(updateTodoLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "you sent wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Mark as compeleted"
    })
})



app.listen(3002);