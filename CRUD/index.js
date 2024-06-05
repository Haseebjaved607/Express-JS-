
import express from "express"
import connectDb from "./config/db.js";
import userModle from "./models/userSchema.js";

const app = express()
const PORT = 3000;
connectDb()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/api/users", async (req, res) => {
    try {
        const userData = await userModle.find({})
        res.json({
            message: "user successfully get",
            data: userData
        })
    } catch (error) {
        res.json({
            message: error.message,
            data: []
        })
    }
})
//post api
app.post('/api/users', async (req, res) => {
    try {
        // console.log(req.body);
        const {
            firstName,
            lastName,
            email,
            gender,
        } = req.body
        if (!firstName || !lastName || !email || !gender) {
            return res.status(400).json({
                message: "all fiels are require"
            })
        }
        const userData = await userModle.create({
            firstName, lastName, email, gender,
        })
        console.log(userData);
        res.json({
            message: "user successfully created",
            data: userData
        })
    } catch (error) {
        res.json({
            msg: error.message
        })
    }
})

app.delete("/api/users/:id", async (req, res) => {
    try {
        console.log(req.params);
        const id = req.params.id
        const deletData = await userModle.findByIdAndDelete(id)
        return res.status(202).json({
            message: "user successfully delete",
            data: deletData
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            data: []
        })

    }
})
app.put('/api/users/:userId', async (req, res) => {
    try {
        // console.log(req.params);
        // console.log(req.body);

        const userId = req.params.userId
        const { gender } = req.body
        const obj = {
            gender
        }
        const upDateData = await userModle.findByIdAndUpdate(userId, obj, {
            new: true
        })
        return res.json({
            message: "data update is successfully",
            // data: upDateData
        })
    } catch (error) {

    }
})

app.listen(PORT, () => console.log(`sever is running at port ${PORT}`))