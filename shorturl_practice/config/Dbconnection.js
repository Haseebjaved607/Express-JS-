import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongodb is connected on ${connection.connection.host}`);
    } catch (error) {
        message: error.message;
    }
}
export default connectDB;