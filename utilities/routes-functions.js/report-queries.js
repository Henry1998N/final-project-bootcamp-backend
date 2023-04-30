const Report = require("../../server-manager/models/report");
const Instructor = require("../../server-manager/models/instructor");

const createNewReport = async (report) => {
  const newReport = new Report({
    residentsSummary: report.residentsSummary,
    personalPlans: report.personalPlans,
    generalActivities: report.generalActivities,
    instructorId: report.instructorId,
    date: report.date,
    apartmentId: report.apartmentId,
    apartmentName: report.apartmentName,
    reportName: report.reportName,
  });
  await newReport.save();
  return newReport._id;
};

const fetchReportsByInstructorId = async (instructorId) => {
  const apartmentsNames = await Instructor.findById(instructorId).populate(
    "apartments",
    "apartmentName"
  );

  const apartmentNames = apartmentsNames.apartments.map(
    (apartment) => apartment.apartmentName
  );

  const reports = await Report.find({
    apartmentName: { $in: apartmentNames },
  });
  
  return reports
};

module.exports = { createNewReport, fetchReportsByInstructorId };
