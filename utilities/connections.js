// connecting from mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const { Schema,Model } = mongoose;

// creating Schema for Customer Sign Up
const signUp = new Schema({
    Name : {
        type : String,
        required : true
    },
    phoneNo : {
        type : String,
        required : true,
    },
    username :{
        type : String,
        required : true,
        unique : true
    },
    pass : {
        type : String,
        required :true,
    },
});

var MedEasy = {};

MedEasy.custSignUp = async ()=>{
    let model = await mongoose.model("users",signUp);
    return model;
}
module.exports=MedEasy;