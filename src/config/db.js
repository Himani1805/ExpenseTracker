import mongoose from "mongoose";
import {MONGODB_URI} from "./config.js"

async function connectDB(){
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("Coonected to mongoDB")
    } catch (error) {
        console.log("Mongodb connection error", error)
        
    }
}

export {connectDB };