const express=require("express");
const app=express();
const {APP_PORT}=require("./config");
const PORT=process.env.PORT || 4000;
const DB=require("./db");
const cors=require("cors");
app.use(cors());
app.use(express.json());
const router=require("./routers");
const errorMiddleware=require("./errorMiddleware");

app.use("/api",router);

app.get("/",(req,res)=>{
    res.send("hello");
})

app.use(errorMiddleware.error);

app.listen(PORT,()=>{
    console.log(`PORT RUNNING ON ${PORT}`)
})