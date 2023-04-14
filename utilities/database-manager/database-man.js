const mongoose = require("mongoose");
require("dotenv").config(); // Load the .env file
const DataBaseManager = function () {
  const connect = function () {
    mongoose
      .connect(
        "mongodb+srv://heenry7:qUyjDXu02VhMrdRE@cluster0.inansdf.mongodb.net/?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
        }
      )
      .then(() => {
        console.log("connected");
      })
      .catch((err) => console.log(err));
    //
  };
  return {
    connect,
  };
};
module.exports = DataBaseManager;
