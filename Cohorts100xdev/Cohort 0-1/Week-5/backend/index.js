// write basic 
const port = 3000
const express = require("express")
const app = express()

// import {createTodo,updateTodo} from "module";
const { todo } = require("../backend/mongo");
const { createTodo, updateTodo } = require("../backend/types");





app.get("/todo", async function (req, res) {
    console.log("get invoked")

    try{
        const todos = await todo.find({});
        res.status(200).json(todos)
    }catch(e){
        console.log(e)
        res.status(404).json({
            msg: "Todos not found"
        })
    }
})
app.use(express.json())
app.post("/todo", async function (req, res) {
    console.log("post invoked")

    const createPayload = req.body;
    const parsepayload = createTodo.safeParse(createPayload);
    try {
        if (!parsepayload.success) {
            res.status(400).json({
                msg: "you have sent the wrong inputs"
            })
            return;
        }
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        })
        res.status(201).json({
            msg: "Todo created successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Something went wrong"
        })
    }
    

})

app.put("/completed", async function (req, res) {
    console.log("put invoked")
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    console.log(parsePayload)
    if (!parsePayload.success) {
        res.status(400).json({
            msg: "you have sent the wrong inputs"
        })
        return;
    }
    try {
        await todo.updateOne({
            _id: req.body.id
        },{
            completed: true
        })
        res.json({
            msg: "Todo completed successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Something went wrong"
        })
    }
    
})

app.listen(port, "0.0.0.0", () => {
    console.log(`Server is activated on port : ${port}  :)`)
})
