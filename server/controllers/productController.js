import asyncHandler from "express-async-handler";
import Product from "../models/Products.js";
import connectDB from "../config/db.js";

//@desc   Fetch all products
//@route  Get /api/products/
//@access Public
const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).send(products).end();
});

//@desc   Fetch product by id
//@route  Get /api/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      throw new Error("Invalid Product Id");
    }
  } catch (error) {
    res.status(404);
    console.log(error.message);
    throw new Error("Product Not Found.");
  }
});

connectDB();
export { getProduct, getProductById };
