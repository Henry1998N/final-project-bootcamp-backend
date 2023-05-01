const express = require('express')
const router = express.Router()

const {
    signIn,
    addNewInstructor,
    updateInstructorApartments,
    updateInstructor,
    deleteInstructor,
    addShift,
    getInstructorShiftsById,
    getResidentsMedicalAppointments,
    getResidentsByInstructorId,
    addNewReport,
    fetchAllReportsByInstructorId,
    getResidentsBirthdaysByInstructorId,
    fetchInstructorById,
} = require('../../utilities/controller/instructor-handler')
const {
    getInstructorById,
} = require('../../utilities/routes-functions.js/instructor-queries')
const {
    googleLogin,
} = require('../../utilities/jwt-google-auth/google-Handler')
const {
    authenticateUser,
} = require('../../utilities/middleware/middlewareFunctions')
// router.use(authenticateUser);
router.post('/sign-in', signIn)
router.post('/auth/google-login', googleLogin)
router.post('/instructors', addNewInstructor)
router.post('/instructorApartment', updateInstructorApartments)
router.put('/:instructorId', updateInstructor)
router.delete('/:instructorId', deleteInstructor)
router.post('/shifts/:instructorId', addShift)
router.get('/shifts/:id', getInstructorShiftsById)
router.get(
    '/residents/medicalAppointments/:instructorId',
    getResidentsMedicalAppointments
)
router.get('/residents/:id', getResidentsByInstructorId)
router.post('/report', addNewReport)
router.post('/reports', fetchAllReportsByInstructorId)
router.get(
    '/residents/birthdays/:instructorId',
    getResidentsBirthdaysByInstructorId
)
router.get('/:instructorId', fetchInstructorById)
module.exports = router
