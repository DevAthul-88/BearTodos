require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./Routes/userRouter')

const app = express();

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL , (err) => {
    if(err) return console.error(err)
    console.log('Database connection established');
})

app.use('/user' , userRoute)




app.listen(process.env.PORT,  () => {
    console.log(`Server started on port ${process.env.PORT}`);
})