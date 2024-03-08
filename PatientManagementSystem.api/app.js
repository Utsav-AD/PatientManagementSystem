const express= require('express');
const bodyParser = require("body-parser");
const connectDb = require('./config/db.js');
const dotenv = require("dotenv").config();

const app = express();
const port= 3000;


const patientRoutes = require('./routes/patient.js')


app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use("/api/patient", patientRoutes);


connectDb();  // Connect to MongoDB database


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
}); 

