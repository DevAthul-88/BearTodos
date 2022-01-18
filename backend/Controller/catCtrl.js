const catModel = require("../Models/catModel");
const catSchema = require("../Models/catModel");
const objectid = require("objectid")
const objectId = require('mongodb').ObjectId

module.exports = {
  createCategory: async (req, res) => {
    try {
      const cat = new catSchema(req.body);

      cat.save();
      return res.json({ message: true });
    } catch (error) {
      return res.json({ message: error.message });
    }
  },

  sendCat: async (req, res) => {
    try {
      let userId = req.body.id;

      const Cats = await catSchema.find({ id: userId });
      res.json({ cat: Cats });
    } catch (error) {
      console.log(error.message);
    }
  },

  sendCatById: async (req, res) => {
    try {
      const re = await catSchema.findOne({ _id: req.params.id });
      res.json({ cat: re });
    } catch (error) {
      res.send({ message: error.message });
    }
  },

  createCatBasedTodo: async (req, res) => {
    try {
      const { data, id } = req.body;
      data._id = objectid()

      const re = await catSchema.updateOne(
        { _id: id },
        {
          $push: { todoArr: data },
        }
      );
      res.json({ status: true });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  editCatTodo: async function (req, res) {
    try {
      let { id } = req.params;
      let { todo } = req.body;
      const re = await catSchema.updateOne(
        { "todoArr._id": objectId(id) },
        {
          $set:{
            "todoArr.$.title":todo.title,
            "todoArr.$.description":todo.description,
            "todoArr.$.priority":todo.priority,
          },
        }
      );
      console.log(re);
      console.log(req.body);
      res.send({ status: true });
    } catch (error) {
      console.log(error.message);
      return res.json({ error: error.message });
    }
  },

  catTodoById: async function (req, res) {
    try {
      let { id } = req.params;
      const re = await catSchema.findOne({
        todoArr: { $elemMatch: { _id: objectId(id) } },
      });
      let final = re.todoArr.filter((e) => e._id == id);
      res.json({ todo: final[0]});
    } catch (error) {
      console.log(error.message);
      res.json({ error: error.message });
    }
  },
};
