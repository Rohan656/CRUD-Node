const mongoose = require("mongoose");
const Schema = mongoose.Schema
const validator = require("validator");

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    image:{
        type:String,
        data:Buffer, 
    }
});

const User = mongoose.model("User",userSchema);
module.exports = User;
