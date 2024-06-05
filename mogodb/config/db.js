import mongoose from "mongoose"
const uri ="mongodb+srv://lucyfar206:KHTmLBAnbpZNzOe7@cluster0.fclwpgs.mongodb.net/"
const connectDb = async()=>{
    try {
        const connect = await mongoose.connect(uri)
        // console.log(connect);
        console.log(`mongodb is connect ${connect.connection.host}`);
    } catch (error) {
        console.log(error.message);
        
    }
}
export  default connectDb