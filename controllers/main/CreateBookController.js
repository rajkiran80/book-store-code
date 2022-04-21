const CreateBookModel=require("../../models/main/CreateBookModel");
const {s3}=require("../../aws");
const {BUCKET}=require("../../config");

const CreateBookController={
      async createBook(req,res,next){
           try{
                const file=await req.file;
                const originalname=await file.originalname;
                const {bookName,authorName,bookPrice,from,to,avlQty}=await req.body;
                
                //is Book already exist in database
                
                const isExist=await CreateBookModel.findOne({
                      bookName:bookName
                });

                if(isExist){
                     await s3.deleteObject({
                        Bucket:BUCKET,
                        Key:originalname
                     }).promise();
                     req.errNo=211;
                     next();
                     return;
                }
                const createBook=new CreateBookModel({
                     bookName:bookName,
                     authorName:authorName,
                     bookPrice:bookPrice,
                     from:from,
                     to:to,
                     avlQty:avlQty,
                     imgUrl:file.location
                }); 
                const results=await createBook.save();
                res.json({
                      message:true
                });
           }catch(err){
                req.errNo=210;
                next();
           }
      }
}
module.exports=CreateBookController;