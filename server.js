const express=require('express')
const mongoose=require('mongoose')
const path=require('path')
const app=express()
const userRoute=require('./router/userRouter')
const cookieParser=require('cookie-parser')
require('dotenv').config()


mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Database connected"))
.catch((err)=>console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser())

app.use('/',userRoute)

app.listen(3001,()=>{
    console.log("server have running on port 3001")
})