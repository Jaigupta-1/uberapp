const user = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
handleSignUp = async (req,res)=>{
  const body = req.body;
  if(!body.email || !body.password || !body.name){
    return res.json({
     message:"Please filled up all the required fields."
  });
  }
  try{
  const hashedPassword = await bcrypt.hash(body.password,10);
  body.password = hashedPassword;
  const client = await user.create(body);
  const token = client.createToken();
  res.cookie("token",token);
  return res.json({
    message:"User Created!"
  });
}
catch(err){
    res.json({
        error:err.message
    })
}} 

handleLogin = async (req,res)=>{
  const {email,password} = req.body;
  if(!body.email || !body.password){
    return res.json({
     message:"Please filled up all the required fields."
  });
}
  try{
  const data = await user.findOne({email}).select('+password');
  if(!data) return res.json({message:"Invalid email or password!"})
  const isVerified = await data.verifyPassword(password);
  if(!isVerified) return res.json({message:"Invalid email or password!"});
  const token = data.createToken();
  res.cookie("token",token);
  return res.json({
    message:"User Logged In!"
  });
}
catch(err){
    res.json({
        error:err.message
    })
}
} 

getProfile = async (req,res)=>{
  const name = req.params.name;
  try{
  const data = await user.findOne({name:name});
  return res.json(data);
}
catch(err){
    res.json({
        error:err.message
    })
}
}

module.exports = {handleSignUp,getProfile,handleLogin};