require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./Routes/userRouter')

const app = express();

app.use(express.json())
app.use(cors())

app.use('/user' , userRoute)

app.listen(process.env.PORT,  () => {
    console.log(`Server started on port ${process.env.PORT}`);
})