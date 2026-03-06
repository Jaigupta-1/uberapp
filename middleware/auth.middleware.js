const jwt = require('jsonwebtoken');
const user = require('../models/user.model');
const captain = require('../models/captain.model');
checkAuth = async (req,res,next)=>{
    try{
  const token = req.cookies?.token;
  if(!token) {return res.json({ message : "Unauthorized"});}
  const data = jwt.verify(token,process.env.SECRET || 'jai@12345');
  const result = await user.findById({id:data._id});
  req.user = result; 
  next();
}
catch(err){
   return next(err)
}
}

checkCaptainAuth = async (req,res,next)=>{
    try{
  const token = req.cookies?.token;
  if(!token) {return res.json({ message : "Unauthorized"});}
  const data = jwt.verify(token,process.env.SECRET || 'jai@12345');
  const result = await captain.findById({id:data._id});
  req.captain = result; 
  next();
}
catch(err){
   return next(err)
}
}

module.exports = {checkAuth,checkCaptainAuth};