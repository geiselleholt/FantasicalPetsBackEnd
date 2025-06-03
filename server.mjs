// Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import serverError from "./middleware/serverError.mjs";
import morgan from "morgan";
import cors from 'cors';

// Setups
connectDB();
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// Routes

////////
// test route
app.get("/", async (req, res) => {
  res.send("Test Route");
});
////////

// Error Handling Middleware
app.use(serverError);

// Listener
app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
