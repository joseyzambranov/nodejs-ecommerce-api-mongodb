require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const userRouter = require("./routes/user")
const authRouter = require("./routes/auth")
const port  = process.env.PORT||5000


mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB Connection Successfull"))
.catch((err)=>{
    console.log(err)
})
app.use(express.json())
app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)

app.listen(port,()=>{
    console.log("Backend server is running")
})