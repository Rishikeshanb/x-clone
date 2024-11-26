import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongo connected");
    }catch(error){
        console.log(`error is connect db:${error}`)
        process.exit(1);
    }
}
export default connectDB;