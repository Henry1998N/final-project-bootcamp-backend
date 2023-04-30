const Report = require('../../server-manager/models/report')

const createNewReport = async(report) => {
    const newReport = new Report({
        residentsSummary: report.residentsSummary,
        personalPlans: report.personalPlans,
        generalActivities: report.generalActivities,
        instructorId: report.instructorId,
        date: report.date,
        apartmentId: report.apartmentId,
        apartmentName: report.apartmentName,
        reportName: report.reportName
    })
    await newReport.save()
    return newReport._id
}

const fetchReportsByInstructorId = async(instructorId) => {
    return await Report.find({instructorId: instructorId})
}

module.exports = {createNewReport, fetchReportsByInstructorId};