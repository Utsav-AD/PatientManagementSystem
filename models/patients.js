const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30,
    },
    DOB: {
        type: Date,
        required: true,
        minlength: 5,
        maxlength: 30,
    },
    gender: {
        type: String,
        required: true,
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
    address: {
        type: String,
        required: true,
    },
    healthInfo: {
        type: String,
        required: true,
    },
});

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;