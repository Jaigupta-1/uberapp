const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app = express();
const cookieParser =require('cookie-parser');
const userRouter = require('./routes/user.routes');

var dynamicCorsOptions = function(req, callback) {
  var corsOptions;
  if (req.headers.origin === 'http://localhost:5173') {
    // Access-Control-Allow-Origin: http://mydomain.com, Access-Control-Allow-Credentials: true, Vary: Origin
    corsOptions = {
      origin: 'http://localhost:5173',
      credentials: true
    };

  callback(null, corsOptions);
  } else {
    corsOptions = { origin: false };
    callback(new Error('Cors Not Allowed'), corsOptions);
  }
};

app.use(express.json());

app.use(cookieParser());
app.use(cors(dynamicCorsOptions));

app.get('/',(req,res)=>{
  res.status(200).json({
    message:"Hello World"
  })
})
app.use('/api',userRouter);

module.exports = app;