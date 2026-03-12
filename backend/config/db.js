const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.Mongodb_URL);
    if (connection) {
      throw new Error("Failed to connect db");
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
