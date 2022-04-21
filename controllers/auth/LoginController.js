const bcrypt=require("bcryptjs");
const REGISTER_MODEL=require("../../models/auth/RegisterModel");

const LoginController={
    async login(req,res,next){
        const {email,pswd}=req.body;
        const results=await REGISTER_MODEL.findOne({email:email});
        const isPswdTrue=await bcrypt.compare(pswd,results.password);
        if(!isPswdTrue){
            res.json({
                message:"login failed,check your username and password again"
            })
            return;
        }
        res.send(results);
    }
}
module.exports=LoginController;