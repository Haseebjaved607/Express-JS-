import express from "express"
import URL from "../model/url.js"

const routes = express.Router()


routes.get("/", async (req, res) => {
    const allurls = await URL.find({})
    return res.render("home", {
        urls: allurls
    })
})
export default routes;