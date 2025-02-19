const mongoose = require('mongoose');

const model = new mongoose.Schema({
     username : {
         type: String,
         trim:true,
         required:[true , "username is required"],
     },
     email: {
        type:String,
        trim:true,
        required:[true , "email is required"]
     },
     password : {
        type:String,
        required:[true , "password is required"]
     }
})

const authmodel = mongoose.model('auths' , model);
module.exports = authmodel;