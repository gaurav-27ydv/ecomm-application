import express from "express";
import asyncHandler from "express-async-handler";
import connectDB from "../../config/db.js";
const router = express.Router();
import Product from "../../models/Products.js";

//@desc   Fetch all products
//@route  Get /api/products/
//@access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.status(200).send(products).end();
  })
);

//@desc   Fetch a single products
//@route  Get /api/products/:id
//@access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).send(product).end();
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }
  })
);

//Form a connection with DB
connectDB();

export default router;
