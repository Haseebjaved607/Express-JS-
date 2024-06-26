import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    generatedId: {
        type: String,
        
        require: true,

    },

    redirectUrl: {
        type: String,
        unique: true,
    },

    visitHistory: [{ timestamps: { type: Number } }]


}, { timestamps: true })

const userModel = mongoose.model("userModel", userSchema)

export default userModel;