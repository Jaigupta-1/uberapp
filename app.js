const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const cookieParser =require('cookie-parser');
const userRouter = require('./routes/user.routes');

app.use(express.json());

app.use(cookieParser());

app.get('/',(req,res)=>{
  res.status(200).json({
    message:"Hello World"
  })
})
app.use('/api',userRouter);

module.exports = app;