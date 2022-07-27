const mongoose = require("mongoose");
const Student = require("./student.model");

mongoose.connect(
    "mongodb://localhost:27017/StudentDB",
    {
        useNewUrlParser: true,
    },
    (err)=>{
        if(!err){
            console.log("Connection succeeded..");
        }else{
            console.log("Error in connection"+ err);
        }
    }
);
