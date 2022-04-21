const PlacedOrderModel=require("../../models/main/PlacedOrderModel");
const CreateBookModel=require("../../models/main/CreateBookModel");

const PlacedOrderController={
    async placedOrder(req,res,next){
        for(let i=0;i<req.body.length;i++){
            try{
                let {pid,qty,bookName,authorName,from,to,price,imgUrl,totalPrice}=req.body[i];
                let bookModel=await CreateBookModel.findById(pid);
                let isQtyEnough=bookModel.avlQty - qty;
                let flag=true;
                isQtyEnough < 0 ? flag=false : flag=true;
                const updatedBookModel=await CreateBookModel.findByIdAndUpdate(pid,{
                    avlQty:isQtyEnough
                });
                const placedOrderModel=await PlacedOrderModel({
                    bookName:bookName,authorName:authorName,bookPrice:price,totalPrice:totalPrice,
                    from:from,to:to,qty:qty,imgUrl:imgUrl,isOrderConfirmed:flag
                });
                const results=await placedOrderModel.save();
            }catch(err){
                req.errNo=210;
                next();
            }
        }
        res.json({
            message:true
        });
    }
}
module.exports=PlacedOrderController;