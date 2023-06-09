const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  residentsSummary: Object,
  personalPlans: Object,
  generalActivities: Object,
  date: String,
  apartmentId: String,
  instructorId: String,
  apartmentName: String,
  reportName: String
});

const Report = mongoose.model("Report", reportSchema);
module.exports = Report;
