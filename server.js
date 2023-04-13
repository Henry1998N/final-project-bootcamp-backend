const express = require("express");
const app = express();
const constants = require("./utilities/constants/constant");
const houseApi = require("./server/routes/house-api");
const cors = require("cors");
const dataBaseModule = require("./utilities/database-manager/database-man");

const dataBaseManager = new dataBaseModule();
dataBaseManager.connect();

app.use(cors());
app.use("/", houseApi);

app.listen(process.env.PORT || constants.PORT, function () {
  console.log("server up and running on port " + constants.PORT);
});
