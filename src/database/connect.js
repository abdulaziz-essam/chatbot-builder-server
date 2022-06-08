import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config()
// const databaseUrl = process.env.MONGO_URI
mongoose.connect("")
const conn = mongoose.connection
export default conn
