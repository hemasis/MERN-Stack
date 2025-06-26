import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://hemasisp:1234@cluster0.ramls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed:", error.message);
        process.exit(1);
        
    }
}