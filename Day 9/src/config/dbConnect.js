import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("✅ MongoDB connected");
    } catch (error) {
        console.log("❌ MongoDB connection Failed: ",error.message);
        process.exit(1);  // it terminates the process with a failure code
        
    }
}

