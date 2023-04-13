const express = require("express");
const app = express();
const constant = require("./utilities/constants/constant");
const houseApi = require("./server/routes/house-api");
const dataBaseModule = require("./utilities/database-manager/database-man");
const dataBaseManager = new dataBaseModule();
const cors = require("cors");
dataBaseManager.connect();
app.use(cors());
app.use("/", houseApi);

app.listen(constant.PORT, function () {
  console.log("server up and running on port " + constant.PORT);
});
