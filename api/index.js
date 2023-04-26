import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import usersRouter from "./routes/users.js"
import authRouter from "./routes/auth.js"
import productsRouter from "./routes/products.js"
import transactionsRouter from "./routes/transactions.js"
import historyRouter from "./routes/history.js"
import cors from 'cors'
dotenv.config()

const app = express()
const port = process.env.PORT || 5000
const corsOptions = {
    //To allow requests from client
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://127.0.0.1",
      "http://104.142.122.231",
    ],
    credentials: true,
    exposedHeaders: ["set-cookie"],
};
  
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
app.use(cors(corsOptions))
app.use(express.json());

app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)
app.use('/api/transactions', transactionsRouter)
app.use('/api/products', productsRouter)
app.use('/api/history', historyRouter)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(port, () => {
    connect();
    console.log(`Example app listening on port ${port}!`)
})