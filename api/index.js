import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usersRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import productsRouter from "./routes/products.js";
import transactionsRouter from "./routes/transactions.js";
import historyRouter from "./routes/history.js";
import chatRouter from "./routes/chat.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Server } from "socket.io"; // Add this
import http from "http";

const app = express();
dotenv.config();
const server = http.createServer(app);
const port = process.env.PORT || 5000;
const corsOptions = {
  //To allow requests from client
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1",
    "http://104.142.122.231",
    "https://e-commerce-bunnyy.netlify.app",
    "https://644d38ad2155012d4b6b7f69--e-commerce-bunnyy.netlify.app",
    "https://e-commerce-admin-bunny.netlify.app",
    "https://main--e-commerce-admin-bunny.netlify.app",
    "https://644dd6f763bf6c0008ae4c0d--e-commerce-admin-bunny.netlify.app",
    "https://main--e-commerce-bunnyy.netlify.app",
    "https://tantannn.github.io/e-commerce/",
    "https://tantannn.github.io",
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
mongoose.connection.on("disconnected", () => {
  console.log("mongo disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});



app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/transactions", transactionsRouter);
app.use("/api/products", productsRouter);
app.use("/api/history", historyRouter);
app.use("/api/chat", chatRouter);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);
  // send a message to the client
  socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });

  // receive a message from the client
  socket.on("hello from client", (...args) => {
    // ...
  });
});

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

server.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}!`);
});
