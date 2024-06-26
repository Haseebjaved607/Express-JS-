import express from "express"
import connectDb from "./config/db.js";
import path from "path"
import routes from "./routes/url.js";
import { restrictToLoggedUserOnly, checkAuth } from "./middlewares/auth.js"
import staticRoute from "./routes/staticRouter.js"
import router from "./routes/user.js"
import cookieParser from "cookie-parser";

const app = express()
const PORT = 8001;

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(routes)
connectDb()

app.use('/url',  routes)
app.use("/user", router)
app.use('/',checkAuth, staticRoute)

// app.get("/get", async (req, res) => {
//     const allUrls = await URL.find({})
//    return res.render("home",{
//     urls:allUrls
//    })

// is thra se b render kr sakty hn server side pr but ye sai ni ha best way ha templating engine use krna like EJS PUG etc 
//     return res.end(`
//         <html>
//             <head></head>
//             <body>
//                  <ol>
//                     ${allUrls.map((url) => `<li>${url.shortId}- ${url.redirectUrl}- ${url.       visitHistory.length}</li>`).join("")}
//                 </ol>
//             </body>
//         </html>
//      `)
// })


app.listen(PORT, () => console.log(`server is running at port : ${PORT}`))    