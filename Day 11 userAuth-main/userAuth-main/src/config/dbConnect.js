import mongoose from "mongoose";
import { DB_NAME } from "../const.js";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://hemasisp:1234@cluster0.ramls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("✅ MongoDB Connected !!!", conn.Connection.name);
    } catch (error) {
        console.log("❌ MongoDB Connection Failed : ", error.message);
        process.exit(1); // it terminate the code
    }
}