import express from "express";

const staticRouter = express.Router();

staticRouter.get('/api/signup', (req, res) => {
    res.render("signup");
});
staticRouter.get('/api/login', (req, res) => {
    res.render("login");
});
staticRouter.get('/api/home', (req, res) => {
    res.render("home");
});

export { staticRouter };