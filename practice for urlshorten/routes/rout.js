import express from "express"
import mongoose from "mongoose"
import {GenerateNewShortUrl} from "../controllers/cont.js"
import {redirectUrlToWeb} from "../controllers/cont.js"
import {handleGetAnalytic} from "../controllers/cont.js"

const route = express.Router();


route.post("/", GenerateNewShortUrl)

route.get("/:id", redirectUrlToWeb)
route.get("/analytic/:id" ,handleGetAnalytic)
export default route;