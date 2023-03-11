const express = require("express");
const musicRoute=require("./router.js");
const cors=require('cors');
const mongoose = require("mongoose");
const app=express();
const PORT=5000;
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/Test-project")
.then(()=>
console.log("database connected"))
.catch(err=>console.log(err));
app.use("/",musicRoute);
app.listen(PORT,()=>
console.log("server connected")
);