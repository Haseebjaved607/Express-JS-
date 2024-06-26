import mongoose from "mongoose";;
import connectDb from "./config/Dbconnection.js";
import route from "./routes/rout.js"
import express from "express"
    

const app = express()
const PORT = 4001
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(route)
connectDb()



app.listen(PORT , ()=> console.log(`server started at port : ${PORT}`))