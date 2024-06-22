
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    smallId: {
        require: true,
        unique: true,
        type: String,
    },
    orignalUrl: {
        require: true,
        type: String,
    },
    visitHistory: [{ timestamps: { type: Number } }]

}, { timestamps: true })

const userModel = mongoose.model("userModel",userSchema )

export default userModel;