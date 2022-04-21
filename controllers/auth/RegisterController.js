const REGISTER_MODEL=require("../../models/auth/RegisterModel");
const {ADMIN_KEY}=require("../../config");
const bcrypt=require("bcryptjs");

const RegisterController={
    async register(req,res,next){
        const {name,email,key,pswd,isAdmin}=req.body;
        if(isAdmin && ADMIN_KEY !== key){
             res.json({
                 message:"key is not valid"
             })
             return;
        }
        //is email already exist
        const results=await REGISTER_MODEL.findOne({email:email});
        if(results){
            res.json({
                message:"sorry this email is already exist"
            })
            return;
        };
        try{
            const hashedPswd=await bcrypt.hash(pswd,8);
            const regieteringNewUser=new REGISTER_MODEL({
                  name:name.trim(),
                  email:email.trim(),
                  password:hashedPswd.trim(),
                  isAdmin:isAdmin
            });
            const results=await regieteringNewUser.save();
            res.send(results);
        }catch(err){
            res.json({
                message:"something went wrong"
            })
        }
    }
}
module.exports=RegisterController;