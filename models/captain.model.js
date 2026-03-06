const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const captainSchema = new mongoose.Schema({
fullName:{
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }
},
email:{
     type:String,
     required:true,
     unique:true
},
password:{
    type:String,
    required:true,
    minlength:[3,'Password must be at least 3 character']
},
socketId:{
    type:String,
},
activeStatus:{
    type:Boolean,
    default:false
},
vehicle:{
    color:{
        type:String,
        required:true,
    }
    ,plate:{
        type:String,
        required:true,
    },
    capacity:{
        type:Number,
        required:true,
    },
    vehicleType:{
        type:String,
        required:true,
        enum:['Car','Auto','MotorCycle']
    }

},
location:{
    lat:{
        type:String,
    },
    long:{
        type:String,
    }
}
});

captainSchema.methods.generateAuthToken = function(){
    return jwt.sign({id:this._id},process.env.SECRET||'jai@12345');
}

captainSchema.methods.comparePassword = function(password){
    return bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword = function(password){
    return bcrypt.hash(password,10);
}

const captain = new mongoose.model('Captain',captainSchema);

module.exports = captain;