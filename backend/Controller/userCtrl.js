require('dotenv').config()
const User = require("../Models/userSchema");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports = {
  getUser: async (req , res) => {
      try {

          const {email , password } = req.body

          const user = await User.findOne({email: email})

          if(!user) return res.status(404).send({message: "User not found"})

          const validPassword = await bcrypt.compare(user.password , password)

          if(!validPassword) return res.status(400).send({message: "Invalid password"})

          const payload = {
           
              id:user._id,

          }

          const token = jwt.sign(payload , process.env.Token , {
              expiresIn:"30d"
          })

          payload.token = token
          res.send({token: token})

          
      } catch (error) {
          res.status(500).send({message: error.message});
      }
  },

  createUser: async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;

      const existingUser = await User.findOne({email:email})

      if(existingUser) return res.send({message: "User already exists"})

      const hashedPassword = await bcrypt.hash(password , 10)

      const user = new User({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hashedPassword,
      })

      user.save()
      res.status(200).send({loggedIn: true})

    } catch (error) {
        res.status(500).send({message: error.message});
    }
  },

  verifyUser: (req , res) => {

    

  },

  editUser: () => {},

  deleteUser: () => {},
};
