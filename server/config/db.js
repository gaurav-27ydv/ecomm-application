import mongoose from "mongoose";
import dotenv from "dotenv";
import "colors";

//Import env variables
dotenv.config();

const connectDB = async () => {
  try {
    //Try to connect to the Database
    const connectDB = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    //Display prompt for successful connection
    console.log(
      `MongoDB connected:`,
      `${connectDB.connection.host}`.green.underline
    );
  } catch (err) {
    //Log error to console and exit
    console.log(`MongoDB not connected:`.red, `${err.message}`.red.underline);
    process.exit(1);
  }
};

export default connectDB;
