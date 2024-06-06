import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongodb is connected ${connect.connection.host}`)

        console.log("MongoDB Connected")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

export default connectDb
