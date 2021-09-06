//Required Imports
import express from "express";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorMiddleware.js";
import cors from "cors";
import productRoutes from "./routes/api/products.js";
import userRoutes from "./routes/api/users.js";

//Initialize App
const app = express();

//Load environment variables
dotenv.config();

//Enable json parsing from URL and CORS
app.use(express.json());
app.use(cors());

//GET request for HOME
app.get("/", (req, res) => {
  res.status(200).send("API is up and running.");
});

//Requests pertaining to user profile is parsed via user routes
app.use("/api/users", userRoutes);

//Requests pertaining to products are parsed via product routes
app.use("/api/products", productRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} on port:${PORT}`)
);
