require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const userRouter = require("./routes/user")
const authRouter = require("./routes/auth")
const productRouter = require("./routes/product")
const cartRouter = require("./routes/cart")
const orderRouter = require("./routes/order")
const stripeRouter = require("./routes/stripe")
const port  = process.env.PORT||5000
const cors = require("cors")


mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB Connection Successfull"))
.catch((err)=>{
    console.log(err)
})
app.use(cors())
app.use(express.json())
app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)
app.use("/api/product",productRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.use("/api/checkout",stripeRouter)

app.listen(port,()=>{
    console.log("Backend server is running")
})