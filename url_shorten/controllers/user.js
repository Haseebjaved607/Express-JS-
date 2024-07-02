import User from "../model/user.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const handleSignUpFunction = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ error: "input field are required" })
        }
        const hashPass = await bcrypt.hash(password, 12)
        // console.log(hashPass)
        // return 
        // 
        await User.create({
            ...req.body,
            password: hashPass
        })
        // res.status(201).json({ message: "User registered successfully!" });
        return res.render("login")
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

const handleloginFunction = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) return res.json({ error: "input field are required" })

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "email or password invalid " });
        }

        const comparePass = await bcrypt.compare(password, user.password)
        // console.log(comparePass)
        if (!comparePass) {
            return res.status(404).json({ error: "email or password invalid " });

        }

        const token = jwt.sign({
            email: user.email,
            _id: user._id
        }, process.env.SCERET_KEY, { expiresIn: '1d' })
        res.cookie("jwt", token)
        // res.status(200).json({
        //     message:"User logged in successfully!",
        //     token
        // });

        return res.render("home")
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { handleSignUpFunction, handleloginFunction }