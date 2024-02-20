import { useState } from "react";

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    return <div>
        <input type="text" placeholder="title"></input>
        <input type="text" placeholder="Description"></input>

        <button onClick={()=>{
            fetch("https://localhost:3002/todos", {
                method: "POST", 
                body:{
                    title: title,  
                    description: description
                }
            }).then(async function (res){
                const json = await res.json();
                alert ("Todo Added");
            })
        }} >Add a todo</button>
    </div>
}