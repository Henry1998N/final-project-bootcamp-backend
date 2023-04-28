const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shiftSchema = new Schema({
  startDate: { type: Date, timezone: "Etc/GMT+3" },
  endDate: { type: Date, timezone: "Etc/GMT+3" },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: "Instructor",
    required: true,
  },
  coordinator: {
    type: Schema.Types.ObjectId,
    ref: "Coordinator",
    required: true,
  },
  apartment: { type: Schema.Types.ObjectId, ref: "Apartment" },
});

const Shift = mongoose.model("Shift", shiftSchema);

module.exports = Shift;
