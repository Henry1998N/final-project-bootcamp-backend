const express = require("express");
const app = express();
require("dotenv").config(); // Load the .env file

const constant = require("./utilities/constants/constant");
const apartmentApi = require("./server-manager/routes/apartment-api");
const instructorApi = require("./server-manager/routes/instructor-api");
const dataBaseModule = require("./utilities/database-manager/database-man");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const dataBaseManager = new dataBaseModule();
const cors = require("cors");
dataBaseManager.connect();
app.use(cors());
app.use("/", apartmentApi);
app.use("/instruct", instructorApi);

app.listen(process.env.PORT || constant.PORT, function () {
  console.log("server up and running on port " + constant.PORT);
});
