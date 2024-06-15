import mongoose, { connect } from "mongoose";
 

async function connectToMongoDB(url){
    return mongoose.connect(url);
}

export default connectToMongoDB;