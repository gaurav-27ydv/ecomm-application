const express = require("express");
const router = express.Router();
const data = require("../../data/products");

router.get("/", (req, res) => {
  res.status(200).send(data).end();
});

router.get("/:id", (req, res) => {
  const product = data.find((product) => product._id === req.params.id);
  res.status(200).send(product).end();
});

module.exports = router;
