const CreateBookController=require("./main/CreateBookController");
const UpdateBookController=require("./main/UpdateBookController");
const ReadBookController=require("./main/ReadBookController");
const DeleteBookController=require("./main/DeleteBookController");
const LoginController=require("./auth/LoginController");
const RegisterController=require("./auth/RegisterController");
const PlacedOrderController=require("./main/PlacedOrderController");
const RecommendedBookController=require("./main/RecommendedBookController");

module.exports={CreateBookController,UpdateBookController,ReadBookController,DeleteBookController,LoginController,RegisterController,PlacedOrderController,RecommendedBookController};