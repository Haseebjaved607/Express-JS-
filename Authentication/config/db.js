import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongodb is connect on ${conn.connection.host}`);
    } catch (error) {
        console.log(error.message);
    }}
export default connectDb