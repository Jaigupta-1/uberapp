const express = require('express');
const {handleSignUp,getProfile,handleLogin,handleLogout} = require('../controller/user.controller')
const userRouter = express.Router();
const {checkAuth} = require('../middleware/auth.middleware');

userRouter.post('/user/signup',handleSignUp);
userRouter.post('/user/login',handleLogin);
userRouter.get('/user/logout',handleLogout);
userRouter.get('/user/:name',checkAuth,getProfile);
module.exports = userRouter;