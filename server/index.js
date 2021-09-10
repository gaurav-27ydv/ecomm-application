import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import errorHandler from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/api/products.js";
import userRoutes from "./routes/api/users.js";

//Initialize App
const app = express();

//Load environment variables
dotenv.config();

app.get("/", (req, res) => {
  res.status(200).send("API is up and running.");
});

//User routes
app.use("/api/users", userRoutes);

//Product routes
app.use("/api/products", productRoutes);

//Middlewares
app.use(express.json());
app.use(cors());
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} on port:${PORT}`)
);
