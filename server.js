const express = require("express");
const app = express();
require("dotenv").config(); // Load the .env file
const constant = require("./utilities/constants/constant");
const cors = require("cors");
const {
  connectToDatabase,
} = require("./utilities/database-manager/database-man");

const apartmentApi = require("./server-manager/routes/apartment-api");
const instructorApi = require("./server-manager/routes/instructor-api");
const residentApi = require("./server-manager/routes/resident-api");

connectToDatabase();
//todo:septate to module
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", apartmentApi);
app.use("/instruct", instructorApi);
app.use("/resident", residentApi);

app.listen(process.env.PORT || constant.PORT, function () {
  console.log("server up and running on port " + constant.PORT);
});