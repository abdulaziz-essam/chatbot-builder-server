import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config()
// const databaseUrl = process.env.MONGO_URI
mongoose.connect("mongodb+srv://aek123:1234@cluster0.ptuiq.mongodb.net/chatbotb?retryWrites=true&w=majority")
const conn = mongoose.connection
export default conn