import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"; 
import cloudinary from "cloudinary";
import cors from "cors";

import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import connectDB from "./db/connectDB.js";
import postRoute from "./routes/post.route.js";
import notificationRoute from "./routes/notification.route.js";

dotenv.config();
const app = express();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET_KEY ,
});
app.use(cors({
	origin:"http://localhost:3000",
	credentials:true
}))

const PORT = process.env.PORT || 5000; 
app.use(express.json()); 
app.use(cookieParser()); 
app.use(express.urlencoded({
	extended:true
}))


app.use("/api/auth", authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("api/notifications",notificationRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});

