
import express from "express"
import connectDb from "./config/database.js"
import userModel from "./models/userSchema.js"

const app = express()
const PORT = 3000

//connecting database
connectDb()
//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//to apply CRUD operation i have to make routes 

// get request
app.get("/api/users", async (req, res) => {
    try {
        const userData = await userModel.find({})
        res.json({
            message: " user data successfully get",
            data: userData,

        })
        req.json({
            message: "successfully get ",
            data: userData,
        })
        // console.log(req.body)
    } catch (error) {
        req.json({
            message: error.message,
            data: [],
        })
    }
})

//post request

app.post("/api/users", async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            gender,
        } = req.body
        if (!firstName || !lastName || !email || !gender) {
            return res.status(400).json({
                message: "all fields are require"
            })
        }

        const userData = await userModel.create({
            firstName, lastName, email, gender,
        })
        // console.log(userData)
        res.json({
            message: "user successfully created",
            data: userData
        })
    } catch (error) {
        res.json({
            message: error.message,
            data: []
        })
    }
})

//delete api

app.delete("/api/users/:id", async (req, res) => {
    //if we want to delete any data we have to delete it by its id or special key 
    try {
        const id = req.params.id
        const deleteuser = await userModel.findByIdAndDelete(id)
        return res.json({
            message: "user successfully deleted",
            data: deleteuser
        })
        console.log(deleteuser)
    } catch (error) {
        return res.json({
            message: error.message,
        })
    }
})

//put or update api
app.patch("/api/users/:id", async (req, res) => {
    // console.log(req.body);
    const id = req.params.id
    console.log(id);
    const { firstName ,lastName , gender} = req.body
    const obj = {
        firstName,
        lastName,
        gender
    }
    const updateData = await userModel.findByIdAndUpdate(id, obj, {
        new: true

    })
    res.status(202).json({
        message: 'successfully updated',
        data:updateData

    })
    console.log(updateData);

})


app.listen(PORT, () => console.log(`sever is running at ${PORT}`))
