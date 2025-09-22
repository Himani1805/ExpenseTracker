import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT
const MONGODB_URI= process.env.MONGODB_URI
const SALT = process.env.SALT
const JWT_SECRET_KEY= process.env.JWT_SECRET_KEY

export { PORT, MONGODB_URI, SALT, JWT_SECRET_KEY}