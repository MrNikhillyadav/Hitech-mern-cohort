const express = require('express');
const todoRouter = express.Router();
const TodoModel = require('../models')

todoRouter.get('/todo',async(req,res) => {
    try {
        const todos = await TodoModel.find()
    
        res.status(200).json({
            response : todos 
        })
    }
    catch(e){
        res.status(500).json({
            error : "Internal server error"
        })
    }
})

todoRouter.post('/todo',async(req,res) => {
    const title = req.body.title;
    const done = req.body.done;

    try{
        // logic to add todo in db
        await TodoModel.create({
            title : title,
            done : done
        })

        res.status(201).json({
            response : "todo added"
        })
    }
    catch(e){
        res.status(500).json({
            error : "Internal server error"
        })
    }
})

todoRouter.put('/todo/:id',async(req,res) => {
    const todoId = req.params.id;

    const title = req.body.title;
    const done = req.body.done;

   try{
         await TodoModel.findByIdAndUpdate(
            todoId,
            {
                title : title,
                done : done
            }
        )

        res.status(200).json({
            response : "todo updated"
        })
   }
   catch(e){
        res.status(500).json({
            error : "Internal server error"
        })
   }
})

todoRouter.delete('/todo/:id',async(req,res) => {
    const todoId = req.params.id;

    try{
        await TodoModel.findByIdAndDelete(todoId);
    
        res.status(200).json({
            response : "todo deleted"
        })
    }
    catch(e){
        res.status(500).json({
            error : "Internal server error"
        })
    }
})

module.exports = todoRouter;
