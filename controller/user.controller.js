const user = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
handleSignUp = async (req,res)=>{
  const body = req.body;
  if(!body.email || !body.password || !body.name){
    return res.json({
     status:false,
     message:"Please filled up all the required fields."
  });
  }
  try{
  const hashedPassword = await user.hashPassword(body.password);
  body.password = hashedPassword;
  const client = await user.create(body);
  const token = client.generateAuthToken();
  res.cookie("token",token);
  return res.json({
    status:true,
    message:"User Created!"
  });
}
catch(err){
    res.json({
        status:false,
        error:err.message
    })
}} 

handleLogin = async (req,res)=>{
  const {email,password} = req.body;
  if(!email || !password){
    return res.json({
     status:false,
     message:"Please filled up all the required fields."
  });
}
  try{
  const data = await user.findOne({email}).select('+password');
  if(!data) return res.json({status:false, message:"Invalid email or password!"})
  const isVerified = await data.verifyPassword(password);
  if(!isVerified) return res.json({status:false, message:"Invalid email or password!"});
  const token = data.generateAuthToken();
  res.cookie("token",token);
  return res.json({
    status:true,
    message:"User Logged In!"
  });
}
catch(err){
    res.json({
        status:false,
        error:err.message
    })
}
} 

getProfile = async (req,res)=>{
  const name = req.params.name;
  try{
  const data = await user.findOne({name:name});
  return res.json({status:true, data});
}
catch(err){
    res.json({
        status:false,
        error:err.message
    })
}
}

handleLogout = (req,res)=>{
  try{
    res.clearCookie("token");
    return res.json({
      status:true,
      message : "Logout Successfully!"
    })
  }
  catch(err){
    res.json({
        status:false,
        error:err.message
    })
  }
}

module.exports = {handleSignUp,getProfile,handleLogin,handleLogout};