import mongoose from "mongoose";
import express from "express"
import { redirectUrlToWeb, handleGetAnalytic } from "../controllers/url.js"
const routes = express.Router()
import { handleGenerateNewShortUrl } from "../controllers/url.js"
import { restrictToLoggedUserOnly } from "../middlewares/auth.js";



routes.post("/", restrictToLoggedUserOnly, handleGenerateNewShortUrl)

// dynamic routes 
routes.get("/api/:shortId", redirectUrlToWeb)

routes.get("/api/analytic/:shortId",restrictToLoggedUserOnly, handleGetAnalytic)

export default routes;