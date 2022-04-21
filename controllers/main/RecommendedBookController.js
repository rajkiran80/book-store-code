const PlacedOrderModel=require("../../models/main/PlacedOrderModel");

const RecommendedBookController={
    async recommendProduct(req,res,next){
        const results = await PlacedOrderModel.find().sort({ _id: -1 }).limit(5);
        res.send(results);
    }
}

module.exports=RecommendedBookController;