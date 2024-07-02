import express from "express";
import { handleSignUpFunction, handleloginFunction } from "../controllers/user.js";
import { handleTodo } from "../controllers/handleTodo.js";
import { checkAuth } from "../middlewares/checkAuth.js";

const router = express.Router();

router.post("/api/signup", handleSignUpFunction);
router.post("/api/login", handleloginFunction);
router.post("/api/todo", checkAuth,handleTodo)


export default router;