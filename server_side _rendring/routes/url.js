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
// dynamic routes 
routes.get("/api/:shortId", redirectUrlToWeb)

routes.get("/api/analytic/:shortId" ,handleGetAnalytic)

export default routes;