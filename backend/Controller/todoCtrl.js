const todoModel = require("../Models/todoModel");


module.exports = {
  getTodoList: async (req, res) => {
    const todo = await todoModel.find({id: req.body.id });

    res.json({ todo: todo });
  },

  createTodo: (req, res) => {
    const todo = new todoModel(req.body);
    todo.save();
    res.json({ status: true });
  },

  editTodo: async (req , res) => {

    try {

      let data = req.body

      let re = await todoModel.updateOne({_id: req.body._id},{
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority,
      })
      res.send({status: true})
      
    } catch (error) {
      res.send({error: error});
    }
   
  },

  deleteTodo: () => {},

  getTodoById: async (req , res) => {
    try {
      let {id} = req.params;
  
      let todo = await todoModel.findById({_id:id})
      console.log(todo);
      res.json({ todo:todo });
     } catch (error) {
       res.json({ status: false , error: error});
     }
  
  }
};
