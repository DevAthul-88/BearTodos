require('dotenv').config()
const User = require("../Models/userSchema");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports = {
  login: async (req , res) => {
      try {
         console.log(req.body);
          const {email , password } = req.body

          const user = await User.findOne({email: email})

          if(!user) return res.json({message: "User not found" , status:false})

          const validPassword = await bcrypt.compare(password , user.password)

          if(!validPassword) return res.json({message: "Invalid password", status:false})

          const payload = {
              email: user.email,
              id:user._id,

          }

          

          const token = jwt.sign(payload , process.env.TOKEN , {
              expiresIn:"30d"
          })

          

          payload.token = token

          const setUser = {
            firstName: user.firstName,
            lastName: user.lastName,
            id: user._id,
            email: user.email
        }

          res.send({token: token, status:true, user:setUser})

          
      } catch (error) {
          
         return res.status(500).json({message: error.message});
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

    try {

        const token = req.header('Authorization')

        if(!token) return res.status(400).send({valid: false});

        const verifyToken = jwt.verify(token , process.env.TOKEN , async (err , data) => {
            if(err) return res.status(500).send({valid: false});

            

            const user = await User.findById(data.id)

            if(!user) return res.status(400).send({valid: false});

            const setUser = {
                firstName: user.firstName,
                lastName: user.lastName,
                id: user._id,
                email: user.email
            }

            res.send({valid: true , user: setUser});
        })

        
    } catch (error) {
        res.status(500).send({message: error.message});
    }

  },

  editUser: () => {},

  deleteUser: () => {},
};
