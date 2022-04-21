const express=require("express");
const router=express.Router();
const {upload}=require("../aws.js");
const {CreateBookController,UpdateBookController,ReadBookController,DeleteBookController,LoginController,RegisterController,PlacedOrderController,RecommendedBookController}=require("../controllers");


/* auth router*/
   router.post("/login",LoginController.login);
   router.post("/register",RegisterController.register);
/*end*/

/*crud router*/
   router.post("/create-book",upload.single("file"),CreateBookController.createBook);
   router.post("/update-book",UpdateBookController.updateBook);
   router.get("/fetch-book",ReadBookController.readBook);
   router.post("/delete-book",DeleteBookController.deleteBook);
   router.post("/placed-order",PlacedOrderController.placedOrder);
   router.get("/recommend-product",RecommendedBookController.recommendProduct);
/*end*/

module.exports=router;