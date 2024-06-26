import express from "express"
import URL from "../model/url.js"
import { restrictToLoggedUserOnly } from "../middlewares/auth.js"

const routes = express.Router()


routes.get("/", restrictToLoggedUserOnly, async (req, res) => {
    if (!req.user) return res.redirect("/login ");
    // console.log(req.user);
    const allurls = await URL.find({ createdBy: req.user._id })
    // console.log(allurls);
    // return
    return res.render("home", {
        urls: allurls
    })
})

routes.get('/signup', (req, res) => {
    return res.render("signup")
})
routes.get('/login', (req, res) => {
    return res.render("login")
})


export default routes;