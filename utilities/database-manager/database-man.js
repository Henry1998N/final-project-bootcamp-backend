const mongoose = require("mongoose");
require("dotenv").config();
const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://abdallahabukhdair:iliAar82pVvakMF6@cluster0.wvjvh0e.mongodb.net/HousingSystem?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
};

module.exports = { connectToDatabase };
