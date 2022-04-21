const mongoose=require("mongoose");
const {MONGOOSE_CONNECTION_STRING}=require("./config");
mongoose.connect(MONGOOSE_CONNECTION_STRING)
.then(()=>{
    console.log("database connection successfull")
})
.catch(()=>{
    console.log("something went wrong while connecting database");
})