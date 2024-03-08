const mongoose = require("mongoose");

const medicalRecSchema = new mongoose.Schema({
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
    Diagnosis: {
        type: String,
        required: true
    },
    Treatment:{
        type: String,
        required: true
    },
    DateRec:{
        type: Date,
        requried: true
    }
});

const medicalRec = mongoose.model("medicalRec", medicalRecSchema);
module.exports = medicalRec;