//Required Imports
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import products from "./routes/api/products.js";

//Initialize App
const app = express();

//Load environment variables
dotenv.config();

//Enable json parsing from URL and CORS
app.use(express.json());
app.use(cors());

//GET request for HOME
app.get("/", (req, res) => {
  res.status(200).redirect("/api/products/");
});

app.use("/api/products/", products);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} on port:${PORT}`)
);
