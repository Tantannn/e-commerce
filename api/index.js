import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import usersRouter from "./routes/users.js"
import authRouter from "./routes/auth.js"
import productsRouter from "./routes/products.js"
import transactionsRouter from "./routes/transactions.js"

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

app.use('/users', usersRouter)
app.use('/auth', authRouter)
app.use('/transactions', transactionsRouter)
app.use('/products', productsRouter)

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