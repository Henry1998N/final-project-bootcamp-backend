const Shift = require("../../server-manager/models/shift");

const createShift = async function (
  coordinatorId,
  instructorId,
  newShift,
  apartmentId
) {
  const shift = new Shift({
    instructor: instructorId,
    startDate: getDate(newShift.startTime),
    endDate: getDate(newShift.endTime),
    apartment: apartmentId,
    coordinator: coordinatorId,
  });
  return shift;
};
const getDate = function (newDate) {
  const date = new Date(
    Date.UTC(
      new Date(newDate).getUTCFullYear(),
      new Date(newDate).getUTCMonth(),
      new Date(newDate).getUTCDate(),
      new Date(newDate).getUTCHours(),
      new Date(newDate).getUTCMinutes(),
      new Date(newDate).getUTCSeconds()
    )
  );
  const timezoneOffset = date.getTimezoneOffset();
  date.setUTCMinutes(date.getUTCMinutes() - timezoneOffset);
  return date;
};

module.exports = {
  createShift,
};
