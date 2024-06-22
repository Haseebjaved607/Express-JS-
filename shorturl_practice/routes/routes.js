import express from "express"
import mongoose from "mongoose"
import { handlesmallIdGenerator } from "../controllers/controllers.js"
import { handleuseShortUrl } from "../controllers/controllers.js"
import { handleGetAnalytic } from "../controllers/controllers.js"


const routes = express.Router();

routes.post("/", handlesmallIdGenerator)
routes.get("/api/:smallId", handleuseShortUrl)
routes.get("/api/analytic/:smallId" , handleGetAnalytic)

export default routes