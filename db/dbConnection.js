const mongoose = require('mongoose');

function connectDB(){

mongoose.connect(process.env.MONGO_URI||'mongodb://127.0.0.1:27017/uberclone').then(()=>console.log("DB Connected!")).catch((err)=>console.log(`Error in Connecting to DB : ${err}`));

}

module.exports = connectDB;