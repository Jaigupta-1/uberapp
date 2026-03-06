const express = require('express');
const {handleSignUp,getProfile,handleLogin,handleLogout} = require('../controller/captain.controller')
const captainRouter = express.Router();
const {checkCaptainAuth} = require('../middleware/auth.middleware');

captainRouter.post('/captain/signup',handleSignUp);
captainRouter.post('/captain/login',handleLogin);
captainRouter.get('/captain/logout',handleLogout);
captainRouter.get('/captain/:name',checkCaptainAuth,getProfile);
module.exports = captainRouter;