const Report = require('../../server-manager/models/report')

const createNewReport = async(report) => {
    const newReport = new Report({
        residentsSummary: report.residentsSummary,
        personalPlans: report.personalPlans,
        generalActivities: report.generalActivities,
        date: report.date,
        apartmentId: report.apartmentId
    })
    await newReport.save()
    return newReport._id
}

module.exports = {createNewReport};