import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const connectDb = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`monogdb is connect ${connect.connection.host}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}
export default connectDb