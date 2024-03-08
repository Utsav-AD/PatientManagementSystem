const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
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
    appointmentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
        required: true,
    },
    totalAmt: {
        type: String,
        required: true,
    },
    paymentStatus:{
        type: String,
        required: true
    }
});

const Billing = mongoose.model("Billing", billingSchema);
module.exports = Billing;