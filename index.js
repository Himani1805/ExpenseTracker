import express from "express";
import { connectDB } from "./src/config/db.js"

const PORT=3000
const app = express()
app.use(express.json())
// app.use(cookieParser())

app.get("/", (request, response) => {
    return response.status(201).json({message: "Server health is good."})
})

app.listen(PORT, () =>{
    console.log(`Server is connected on  http://localhost:${PORT}`)
    connectDB()
})