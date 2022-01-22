const catModel = require("../Models/catModel");
const catSchema = require("../Models/catModel");
const objectid = require("objectid");
const objectId = require("mongodb").ObjectId;

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

  deleteCategory: async (req , res) => {
     try {
       let {id} = req.params
       let {userId} = req.body
       console.log(userId);
       let re = await catSchema.deleteOne({_id:objectId(id) , id:userId})
       res.json({ status: true });

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
      let todo = null
      const re = await catSchema.findOne({ _id: req.params.id , id:req.body.userId });
      console.log(req.body);

      if(req.body.filterData == 'all'){
        todo = re.todoArr
      }
      else if(req.body.filterData == 'unCompleted'){
        todo = re.todoArr.filter(e => e.isCompleted == false)
      }
      else if (req.body.filterData == 'completed') {
          todo = re.todoArr.filter(e => e.isCompleted == true)
      }
      

      res.json({cat:re, todo: todo , id:re._id });
    } catch (error) {
      res.send({ message: error.message });
    }
  },

  createCatBasedTodo: async (req, res) => {
    try {
      const { data, id } = req.body;
      data._id = objectid();

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
          $set: {
            "todoArr.$.title": todo.title,
            "todoArr.$.description": todo.description,
            "todoArr.$.priority": todo.priority,
          },
        }
      );

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
      res.json({ todo: final[0] });
    } catch (error) {
      console.log(error.message);
      res.json({ error: error.message });
    }
  },

  deleteCatTodo: async function (req, res) {
    try {
      const { id, _id } = req.body;

      const re = await catSchema.findOneAndUpdate(
        { _id: objectId(_id) },
        { $pull: { todoArr: { _id: objectId(id) } } }
      );
      res.json({ status: true });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  finishCatTodo: async function (req, res) {
    try {
     
      let { todo } = req.body;
      const re = await catSchema.updateOne(
        { "todoArr._id": objectId(req.body._id) },
        {
          $set: {
            "todoArr.$.isCompleted": true,
          },
        }
        
      );

      res.send({ status: true });
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
