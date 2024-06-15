import express from "express"
import routes from "./routes/url.js";
import connectDb from "./config/db.js";


const app = express()
const PORT = 3001;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
connectDb()

// app.use(urlrouter)

// app.get("/", (req, res) => {
//     return res.send("hello")
// })


app.listen(PORT, () => console.log(`server is running at port : ${PORT}`))    