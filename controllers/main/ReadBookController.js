const CreateBookModel=require("../../models/main/CreateBookModel");

const ReadBookController={
    async readBook(req,res,next){
        try{
            const booksList=await CreateBookModel.find();
            res.send(booksList);
        }catch(err){
            req.errNo=210;
            next();
        }
    }
}
module.exports=ReadBookController;