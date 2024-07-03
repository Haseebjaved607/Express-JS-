import User from "../model/user.js"

import { setUser } from "../service/auth.js"


async function handleUserSignup(req, res) {
    const { name, email, password } = req.body
    await User.create({
        name,
        email,
        password,
    })
    return res.redirect("/")
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body
    const user = await User.findOne({ email, password })
   
    if (!user) res.render("login", {
        error: "invalid username or password"
    })
    
    
    const token =  setUser(user)
    // res.cookie("uid", token)
    return res.json({token})
}

export { handleUserSignup, handleUserLogin };