const catModel = require('../Models/catModel')
const catSchema = require('../Models/catModel')


module.exports  = {
   createCategory: async (req , res) => {
        try {

            const cat = new catSchema(req.body)

            cat.save()
            return res.json({message:true})
            
        } catch (error) {
           return res.json({message: error.message})
        }
    },


    sendCat: async (req , res) => {
        try {
            
            let userId = req.body.id

            const Cats = await catSchema.find({id: userId})
            res.json({cat:Cats})

        } catch (error) {
            console.log(error.message);
        }
    }
}