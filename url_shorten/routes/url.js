import mongoose from "mongoose";
import express from "express"
import { redirectUrlToWeb } from "../controllers/url.js"
import {handleGetAnalytic} from "../controllers/url.js"
const routes = express.Router()
import { handleGenerateNewShortUrl } from "../controllers/url.js"


routes.post("/", handleGenerateNewShortUrl)
// routes.get("/",(req,res)=>{
//     return res.send("jfhfheuue")
// })

routes.get("/:shortid", redirectUrlToWeb)

routes.get("/analytic/:id" ,handleGetAnalytic)

export default routes;