const todoModel = require('../Models/todoModel')

module.exports = {

    getTodoList: () => {

    },

    createTodo: (req ,res) => {
       
        const todo = new todoModel(req.body)
        todo.save()
        res.json({status:true})


    },

    editTodo: () => {

    },

    deleteTodo: () => {

    }


}