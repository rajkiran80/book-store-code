const mongoose=require("mongoose");
const Schema=mongoose.Schema;


const PlacedOrderModel=new Schema({
     bookName:{type:String,required:true},
     authorName:{type:String,required:true},
     bookPrice:{type:Number,required:true},
     totalPrice:{type:Number,required:true},
     from:{type:Number,required:true},
     to:{type:Number,required:true},
     qty:{type:Number,required:true},
     imgUrl:{type:String,required:true},
     isOrderConfirmed:{type:String,required:true},
     time : { type : Date, default: Date.now }
   }
);

module.exports=mongoose.model("placed-orders",PlacedOrderModel);