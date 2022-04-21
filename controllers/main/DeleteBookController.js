const CreateBookModel=require("../../models/main/CreateBookModel");
const {s3}=require("../../aws");
const {BUCKET}=require("../../config");

const DeleteBookController={
    async deleteBook(req,res,next){
        try{
            const {id,img}=await req.body;
            const deletedFile=await CreateBookModel.findOneAndDelete(id);
            await s3.deleteObject({
                Bucket:BUCKET,
                Key:img
            })
            .promise();
                res.json({
                   message:true
                });
        }catch(err){
            req.errNo=210;
            next();
        }
    }
}
module.exports=DeleteBookController;