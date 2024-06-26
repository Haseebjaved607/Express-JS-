
import express from "express"
import mongoose from "mongoose"
import connectDB from "./config/Dbconnection.js";
import routes from "./routes/routes.js"
import path from "path"
import staticRoute from "./routes/staticRouter.js"

const app = express();
const PORT = 5001;
connectDB()

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes) 


app.use("/url", routes)
app.use('/', staticRoute)
// app.use(express.urlencoded({ extended: true }))


app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`))
