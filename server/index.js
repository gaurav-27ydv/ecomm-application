const express = require("express");
const app = express();
const data = require("./data/products");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("API is functioning on /api/products/");
});

const products = require("./routes/api/products");
app.use("/api/products/", products);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at: ${PORT}`));
