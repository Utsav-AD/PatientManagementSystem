const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true,
        unique: true,
    },
    patientID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true,
    },
    doctorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true,
    },
    medications: {
        type: String,
        required: true,
    },
    dosage:{
        type: String,
        required: true,
    },
    prescriptionDate: {
        type: String,
        required: true,
    }
});

const Prescription = mongoose.model("Prescription", prescriptionSchema);
module.exports = Prescription;