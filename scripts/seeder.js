//Import required libraries
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

//Import dummy data
import users from "../server/data/users.js";
import products from "../server/data/products.js";

//Import models
import User from "../server/models/Users.js";
import Product from "../server/models/Products.js";
import Order from "../server/models/Orders.js";

//Import middleware
import connectDB from "../server/config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    const createdUsers = await User.insertMany(users);
    const adminUserId = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, vendor: adminUserId };
    });

    await Product.insertMany(sampleProducts);
    console.log("Data inserted".blue);
  } catch (err) {
    console.log("Couldn't import Data:", `$${err.message}`.red.underline);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    console.log("Data Removed".blue);
  } catch (err) {
    console.log(err.message.red.underline);
    process.exit(1);
  }
};

if (process.argv[2] == "-d") {
  destroyData();
} else {
  importData();
}
