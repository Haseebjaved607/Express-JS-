import { getUser } from "../service/auth.js";

async function restrictToLoggedUserOnly(req, res, next) {
    const userUid = req.headers['authorization'];

    if (!userUid) {
        console.log("Authorization header missing");
        return res.redirect('/login');
    }

    const token = userUid.split("Bearer ")[1];
    if (!token) {
        console.log("Token missing from authorization header");
        return res.redirect('/login');
    }

    const user = await getUser(token);
    if (!user) {
        console.log("User not found, invalid token");
        return res.redirect("/login");
    }

    req.user = user;
    next();
}

async function checkAuth(req, res, next) {
    const userUid = req.headers['authorization'];

    if (!userUid) {
        console.log("Authorization header missing");
        return res.redirect('/login');
    }

    const token = userUid.split("Bearer ")[1];
    if (!token) {
        console.log("Token missing from authorization header");
        return res.redirect('/login');
    }

    const user = await getUser(token);
    if (!user) {
        console.log("User not found, invalid token");
        return res.redirect("/login");
    }

    req.user = user;
    next();
}

export { restrictToLoggedUserOnly, checkAuth };
