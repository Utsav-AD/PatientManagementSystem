const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    ID:{
        //id starts with 10--
        type: Number,
        required: true,
        unique: true
    },
    fullName:{
        type: String,
        required: true,
        minlength:5,
        maxlength:30,
    },    
    password:{
        type:String, 
        required:true,
        minlength:8
    },
    contactNumber:{
        type : String,
        maxlength:15,
        minlength:9,
        required : true
    },
    email:{
        type: String,
        required:true
    },
});

const Admin = mongoose.model("Admin",adminSchema);
module.exports=Admin;