const mongoose = require('mongoose');

function connectDB(){

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB Connected!")).catch((err)=>console.log(`Error in Connecting to DB : ${err}`));

}

module.exports = connectDB;