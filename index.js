const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParseer = require("body-parser");
const cookieParser = require("cookie-parser"); 
// const morgan = require("morgan");
// const dotenv = require("dotenv");
// dotenv.config();
const dishRoute = require("./routes/dish")
const menuRoute = require("./routes/menu")
const packageRoute = require("./routes/package")
const userRoute = require("./routes/user")
const orderRoute = require("./routes/order")

const corsOption ={
    origin:'*',
    credentials : true,
    optionSuccessStatus:200
}

//CONNECT DB
mongoose.connect("mongodb+srv://trieu123vn:trieu123@cluster0.w1tifv5.mongodb.net/MenuBooking?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connected DB")
}
)
.catch(()=>{
console.log("Somthing went wrong!")
})

app.use(bodyParseer.json({limit:"50mb"}))

app.use(cookieParser());
app.use(cors(corsOption));
// DISH ROUTE
app.use("/v1/dish",dishRoute);
// MENU ROUTE
app.use("/v1/menu",menuRoute)
// PACKAGE ROUTE
app.use("/v1/package",packageRoute)
// USER ROUTE
app.use("/v1/user",userRoute)
//ORDER ROUTE
app.use("/v1/order",orderRoute)
app.listen(process.env.PORT ||8000, ()=>{
    console.log("Server is running")
})