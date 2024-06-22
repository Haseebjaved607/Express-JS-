import express from "express"
import userModel from "../models/schema.js"

const routes = express.Router()


routes.get("/", async (req, res) => {
    const allurls = await userModel.find({})
    return res.render("forntend", {
        urls: allurls
    })
})
export default routes;