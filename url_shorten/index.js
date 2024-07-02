import express from "express"
import routes from "./routes/url.js";
import connectDb from "./config/db.js";
import path from "path"
import URL from "./model/url.js";
import cookieParser from "cookie-parser";
import {staticRouter} from "./routes/staticRoute.js"



const app = express()
const PORT = 8001;

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
connectDb()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)
app.use(staticRouter)

// app.use(urlrouter)

app.get("/get", async (req, res) => {
    const allUrls = await URL.find({})
    return res.render("home")
})


app.listen(PORT, () => console.log(`server is running at port : ${PORT}`))    