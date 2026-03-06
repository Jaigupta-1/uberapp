const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select:false
    }
});

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

// verify password
userSchema.methods.verifyPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.createToken = function (){
  return jwt.sign(
    { id: this._id }, 
    process.env.SECRET||'jai@12345',
    { expiresIn: "1d" });
}

const User = mongoose.model('User', userSchema);

module.exports = User;