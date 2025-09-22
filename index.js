import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./src/config/db.js"
import { PORT as ENV_PORT } from "./src/config/config.js"
import authRoutes from "./src/routes/auth.route.js"
import transactionRoutes from "./src/routes/transaction.route.js"

const PORT = ENV_PORT || 3000
const app = express()
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/transactions", transactionRoutes)

app.get("/", (request, response) => {
    return response.status(200).json({ message: "Server health is good." })
})

async function startServer() {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`)
        })
    } catch (error) {
        console.error("Failed to start server:", error)
        process.exit(1)
    }
}

startServer()