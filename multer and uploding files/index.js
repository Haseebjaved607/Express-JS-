import express from "express";
import path from "path"
import upload from "./middleware/multer.js";


const app = express()
const PORT = 5000

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

 

app.get('/', (req, res) => {
    res.render('homepage')
})
app.post("/upload", upload.single("profilename"), (req, res ) => {
    // console.log(req.file);
    res.render("homepage")
})


app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`)
})