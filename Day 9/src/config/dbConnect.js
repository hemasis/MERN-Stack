import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://hemasisp:1234@cluster0.ramls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("✅ MongoDB connected");
    } catch (error) {
        console.log("❌ MongoDB connection Failed: ",error.message);
        process.exit(1);  // it terminates the process with a failure code
        
    }
}
