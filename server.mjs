// Imports
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/conn.mjs";
import serverError from "./middleware/serverError.mjs";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routes/userRoutes.mjs";
import petRoutes from "./routes/petRoutes.mjs";
import imageRoutes from "./routes/imageRoutes.mjs";


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
app.use("/api/user", userRoutes);
app.use("/api/pet", petRoutes);
app.use("/api/image", imageRoutes);


// Error Handling Middleware
app.use(serverError);

// Listener
app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
