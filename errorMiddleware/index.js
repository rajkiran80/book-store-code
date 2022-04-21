const errorMiddleware={
     error(req,res,next){
         const errNo=req.errNo;
         if(errNo === 210){
             res.json({
                 message:"something went wrong"
             })
         }else if(errNo === 211){
            res.json({
                message:"sorry this book is already added with this name"
            })
         }
     }
}
module.exports=errorMiddleware;