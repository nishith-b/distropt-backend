const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("Mongo Error", err);
    process.exit(1);
  }
};

module.exports = {
  connectDB,
};
