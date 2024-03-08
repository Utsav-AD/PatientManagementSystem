const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    ID: {
        // id starts with 20 -- 
        type: Number,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30,
    },
    specialization:{
        type :String ,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    contactNumber: {
        type: String,
        maxlength: 15,
        minlength: 9,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;