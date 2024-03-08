const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Patient = require("../models/patients");


router.post("/register", async (req, res) => {
    const {fullName,DOB,gender,password,contactNumber,email,address,healthInfo} = req.body;

    const newPatient = await Patient.create({
         fullName, DOB, gender,password,contactNumber,email,address,healthInfo
    });

    res.send(newPatient)
});

router.post("/login", async(req,res)=>{
    const {contactNumber, password} = req.body;

    const patient = await Patient.findOne({ contactNumber });
    if (patient && (await password === patient.password)){
        const accessToken = jwt.sign(
         {
          fullName: patient.fullName,
          contactNumber: patient.contactNumber,
          id: patient.id,
         },
         process.env.JWT_SECRET_TOKEN,
         {
          expiresIn: "1d",
         }
        );

        res.json({contactNumber: patient.contactNumber,accessToken: accessToken,});
    }
    
});

module.exports = router; 