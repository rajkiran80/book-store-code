const aws=require("aws-sdk");
const {ACCESS_KEY,SECRET_ACCESS_KEY,BUCKET,REGION}=require("./config");
const multer=require("multer");
const multerS3=require("multer-s3");

aws.config.update({
    secretAccessKey:SECRET_ACCESS_KEY,
    accessKeyId:ACCESS_KEY,
    region:REGION
});

const s3=new aws.S3();

const upload=multer({
    storage:multerS3({
        bucket:process.env.BUCKET,
        s3:s3,
        acl:"public-read",
        key:(req,file,cb)=>{
            cb(null,Date.now()+file.originalname);
        }
    })
})


module.exports={upload,s3};