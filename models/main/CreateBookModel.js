const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const CREATE_BOOK_MODEL=new Schema({
     bookName:{type:String,required:true},
     authorName:{type:String,required:true},
     bookPrice:{type:Number,required:true},
     from:{type:Number,required:true},
     to:{type:Number,required:true},
     avlQty:{type:Number,required:true},
     imgUrl:{type:String,required:true}
});

module.exports=mongoose.model("book-list",CREATE_BOOK_MODEL);