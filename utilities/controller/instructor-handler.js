const {
  validateUser,
  generateToken,
} = require("../jwt-google-auth/login-functions");
const {
  addInstructor,
  updateInstructorApartmentsById,
} = require("../../utilities/routes-functions.js/instructor-queries");
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
  // try{
  //   const { instructorId, report} = req.body
  //   const response = await 
  // }
  // catch(err) {
  //   res.status(401).send({ message: err.message });
  // }
}

module.exports = { signIn, addNewInstructor, updateInstructorApartments, addNewReport };
