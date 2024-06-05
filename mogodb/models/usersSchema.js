import mongoose from "mongoose";
// defining schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    gender: {
        type: String,
        require: true,
    },
})

const userModel = mongoose.model("user", userSchema)
export  default userModel