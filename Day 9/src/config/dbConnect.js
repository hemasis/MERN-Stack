import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("...")
        console.log("✅ MongoDB connected");
    } catch (error) {
        console.log("❌ MongoDB connection Failed: ",error.message);
        process.exit(1);  // it terminates the process with a failure code
        
    }
}
