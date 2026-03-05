const jwt = require('jsonwebtoken');
checkAuth = async (req,res,next)=>{
    try{
  const token = req.cookies?.token;
  if(!token) {return res.json({ message : "Unauthorized"});}
  const data = await jwt.verify(token,process.env.SECRET || 'jai@12345');
  req.user = data; 
  next();
}
catch(err){
   return next(err)
}
}

module.exports = checkAuth;