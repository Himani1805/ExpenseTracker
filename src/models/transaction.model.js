import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    amount:{type:Number, required:true },
    type:{type:String, enum: ["Credit", "Debit"], required:true },
    category: {type:String,  required: true, trim: true},
    description:{type:String, trim: true, required: true}
}, {versionKey:false, timestamps:true})

const Transction = mongoose.model("Transction", transactionSchema)
export default Transction;