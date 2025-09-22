import mongoose from "mongoose";
import {MONGODB_URI} from "./config.js"

async function connectDB(){
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("MongoDB connection error", error)
        throw error
    }
}

export {connectDB };