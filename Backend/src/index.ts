import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()
const app=express();
app.use(express.json())
app.use(cors())
//  const url:string=`${process.env.MONGO_URL}`
 


mongoose.connect(`${process.env.MONGO_URL}`).
then(()=>{
    console.log("connected to db")
}).
catch((error)=>{
    console.log(error.message)
})



app.listen(3000,()=>{
    console.log("server is started and running at port 3000...")
})