const todoModel = require("../Models/todoModel");

module.exports = {
  getTodoList: async (req, res) => {
    let todo = null;

    if (req.body.value == "all") {
      todo = await todoModel.find({ id: req.body.id }).sort({ isCompleted: 1 });
    } else if (req.body.value == "unCompleted") {
      todo = await todoModel.find({ id: req.body.id, isCompleted: false });
    } else {
      todo = await todoModel.find({ id: req.body.id, isCompleted: true });
    }
    res.json({ todo: todo });
  },

  createTodo: (req, res) => {
    const todo = new todoModel(req.body);
    todo.save();
    res.json({ status: true });
  },

  editTodo: async (req, res) => {
    try {
      let data = req.body;

      let re = await todoModel.updateOne(
        { _id: req.body._id },
        {
          title: req.body.title,
          description: req.body.description,
          priority: req.body.priority,
        }
      );
      res.send({ status: true });
    } catch (error) {
      res.send({ error: error });
    }
  },

  deleteTodo: async (req, res) => {
    try {
      let re = await todoModel.deleteOne({ _id: req.body.id });

      res.json({ status: true });
    } catch (error) {
      res.json({ error: error });
    }
  },

  getTodoById: async (req, res) => {
    try {
      let { id } = req.params;

      let todo = await todoModel.findById({ _id: id });
      console.log(todo);
      res.json({ todo: todo });
    } catch (error) {
      res.json({ status: false, error: error });
    }
  },

  completeTodo: async (req, res) => {
    try {
      let re = await todoModel.updateOne(
        { _id: req.body.id },
        { isCompleted: true }
      );

      res.json({ status: true });
    } catch (error) {
      res.json({ error: error });
    }
  },

  totalCount: async (req, res) => {
    try {
      const {id} = req.params

    const re = await todoModel.find({id:id}).count()
    const reFinish = await todoModel.find({id:id , isCompleted: true}).count()
    const unFinish = await todoModel.find({id:id , isCompleted: false}).count()
    res.json({total:re , finished:reFinish , unFinish: unFinish})
    } catch (error) {
      console.log(error.message);
    }
  }
};
