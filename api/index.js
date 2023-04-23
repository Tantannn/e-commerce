import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import usersRouter from "./routes/users.js"
import authRouter from "./routes/auth.js"

dotenv.config()

const app = express()
const port = 5000

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        throw error;
    }
};
mongoose.connection.on('disconnected', () => {
    console.log('mongo disconnected');
})
mongoose.connection.on('connected', () => {
    console.log('mongo connected');
})
app.use(express.json());

app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)

app.listen(port, () => {
    connect();
    console.log(`Example app listening on port ${port}!`)
})