const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true,
        unique: true,
    },
    patientID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    doctorID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    AppointmentDateTime: {
        type: Date,
        required: true,
    },
    Status:{
        type: String,
        required: true
    }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;