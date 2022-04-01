require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const userRouter = require("./routes/user")
const authRouter = require("./routes/auth")
const productRouter = require("./routes/product")
const cartRouter = require("./routes/cart")
const orderRouter = require("./routes/order")
const port  = process.env.PORT||5000


mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB Connection Successfull"))
.catch((err)=>{
    console.log(err)
})
app.use(express.json())
app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)
app.use("/api/product",productRouter)
app.use("/api/product",cartRouter)
app.use("/api/order",orderRouter)

app.listen(port,()=>{
    console.log("Backend server is running")
})