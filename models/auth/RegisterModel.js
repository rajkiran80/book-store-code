const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const REGISTER_MODEL=new Schema({
     name:{type:String,required:true},
     email:{type:String,required:true},
     password:{type:String,required:true},
     isAdmin:{type:Boolean,required:true}
});

module.exports=mongoose.model("new-user-admin",REGISTER_MODEL);

