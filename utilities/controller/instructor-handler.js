const {
  validateUser,
  generateToken,
} = require("../jwt-google-auth/login-functions");
const {
  addInstructor,
  updateInstructorApartmentsById,
  addReportToInstructor,
} = require("../../utilities/routes-functions.js/instructor-queries");
const {createNewReport, fetchReportsByInstructorId} = require('../routes-functions.js/report-queries')

const signIn = async function (req, res) {
  const { email, password } = req.body;
  const user = await validateUser(email, password);
  if (user) {
    const jwt = generateToken(email, user.id, user.name);
    res.status(200).json({ token: jwt, user: user });
  } else {
    res.status(401).send({ message: "Failure" });
  }
};
const addNewInstructor = async function (req, res) {
  try {
    const { instructor } = req.body;
    const response = await addInstructor(instructor);
    if (!response) {
      res.status(409).send({ message: "user already exist" });
      return;
    }
    res.status(200).send({ data: response });
  } catch (err) {}
};
const updateInstructorApartments = async function (req, res) {
  try {
    const { instructorId, apartmentId } = req.body;
    const response = await updateInstructorApartmentsById(
      instructorId,
      apartmentId
    );
    if (!response) {
      res.status(401).send({ message: "error with the updating" });
      return;
    }
    res
      .status(200)
      .send({ message: "updated successfully", apartments: response });
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
};

const addNewReport = async function(req, res) {
  try{
    const { instructorId, report } = req.body
    const reportResponse = await createNewReport(report)
    const instructorResponse = await addReportToInstructor(instructorId, reportResponse)
    if (!instructorResponse) {
      res.status(401).send({ errorCode: 401, message: "Error with creating a new Report" });
      return
    }
    res.status(200).send({message: "Report was created successfully"})
  }
  catch(err) {
    res.status(401).send({ message: err.message });
  }
}

const fetchAllReportsByInstructorId = async function(req, res) {
  try {
    const {instructorId} = req.body
    const response = await fetchReportsByInstructorId(instructorId)
    if (!response) {
      res.status(401).send({ errorCode: 401, message: "There seems to be a problem fetching your reports" });
      return
    }
    res.status(200).send({message: "Reports were successfully fetched", reports: response})
  }
  catch(err) {
    res.status(401).send({ message: err.message });
  }
}

module.exports = { signIn, addNewInstructor, updateInstructorApartments, addNewReport, fetchAllReportsByInstructorId };
