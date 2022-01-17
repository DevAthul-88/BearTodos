const catModel = require("../Models/catModel");
const catSchema = require("../Models/catModel");

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
      console.log(req.params.id);
      res.json({ cat: re });
    } catch (error) {
      res.send({ message: error.message });
    }
  },

  createCatBasedTodo: async (req, res) => {
    try {
      const { data, id } = req.body;

      const re = await catSchema.updateOne(
        { _id: id },
        {
          $push: { todoArr: data },
        }
      );
    } catch (error) {
        res.json({error:error.message});
    }
  },
};
