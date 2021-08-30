import express from "express";
const router = express.Router();
import data from "../../data/products.js";

const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@dummybuys.mdfw2.mongodb.net/products?retryWrites=true&w=majority`;

router.get("/", (req, res) => {
  res.status(200).send(data).end();
});

router.get("/:id", (req, res) => {
  const product = data.find((product) => product._id === req.params.id);
  res.status(200).send(product).end();
});

export default router;
