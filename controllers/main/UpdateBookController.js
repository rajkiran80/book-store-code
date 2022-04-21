const CreateBookModel=require("../../models/main/CreateBookModel");
const {s3}=require("../../aws");
const {BUCKET}=require("../../config");

const UpdateBookController={
    async updateBook(req,res,next){
        const {id,bookName,authorName,bookPrice,from,to,avlQty}=await req.body;
        try{
            const updatedBook=await CreateBookModel.findByIdAndUpdate(id,{
                    bookName:bookName,
                    authorName:authorName,
                    bookPrice:bookPrice,
                    from:from,
                    to:to,
                    avlQty:avlQty
            });
            res.json({
                message:true
            });
        }catch(err){
            req.errNo=210;
            next();
        }
    }
}
module.exports=UpdateBookController;