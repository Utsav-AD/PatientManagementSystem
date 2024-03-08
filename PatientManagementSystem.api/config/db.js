const mongoose = require ('mongoose');

const connectDb = async () => {
    try{
        conn = await mongoose.connect("mongodb+srv://utsav:utsav@patientms.hrtqzhk.mongodb.net/?retryWrites=true&w=majority&appName=PatientMS");
        console.log("connected to DB", conn.connection.host, conn.connection.name);
    }catch(err){
        console.log(err);
    }
};

module.exports = connectDb;