import express from "express"
import routes from "./routes/url.js";
import connectDb from "./config/db.js";
import path from "path"
import URL from "./model/url.js";
import staticRoute from "./routes/staticRouter.js"


const app = express()
const PORT = 8001;

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
connectDb()

app.use('/url' , routes)
app.use('/',staticRoute)

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