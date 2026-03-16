const captain = require('../models/captain.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
handleSignUp = async (req,res)=>{
  const body = req.body;
  if(!body.email || !body.password || !body.fullName.firstName || !body.fullName.lastName || !body.vehicle.color || !body.vehicle.plate || !body.vehicle.capacity || !body.vehicle.vehicleType){
    return res.json({
     status:false,
     message:"Please filled up all the required fields."
  });
  }
  try{
  const hashedPassword = await captain.hashPassword(body.password);
  body.password = hashedPassword;
  const client = await captain.create(body);
  const token = client.createToken();
  res.cookie("token",token);
  return res.json({
    status:true,
    message:"captain Created!"
  });
}
catch(err){
    res.json({
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
  const data = await captain.findOne({email}).select('+password');
  if(!data) return res.json({status:false, message:"Invalid email or password!"})
  const isVerified = await data.comparePassword(password);
  if(!isVerified) return res.json({status:false, message:"Invalid email or password!"});
  const token = data.createToken();
  res.cookie("token",token);
  return res.json({
    status:true,
    message:"captain Logged In!"
  });
}
catch(err){
    res.json({
        error:err.message
    })
}
} 

getProfile = async (req,res)=>{verifyPassword
  const name = req.params.name;
  try{
  const data = await captain.findOne({name:name});
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