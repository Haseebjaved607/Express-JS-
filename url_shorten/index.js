import express from "express"
import routes from "./routes/url.js";
import connectDb from "./config/db.js";
import path from "path"
import URL from "./model/url.js";


const app = express()
const PORT = 8001;

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
connectDb()

// app.use(urlrouter)

// app.get("/get", async (req, res) => {
//     const allUrls = await URL.find({})
//     return res.end("<h1>hey form server </h1>")
// })


app.listen(PORT, () => console.log(`server is running at port : ${PORT}`))    