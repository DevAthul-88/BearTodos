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

  editTodo: () => {},

  deleteTodo: () => {},
};
