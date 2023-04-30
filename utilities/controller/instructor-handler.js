const {
  validateUser,
  generateToken,
} = require("../jwt-google-auth/login-functions");

const {
  addInstructor,
  updateInstructorApartmentsById,
  updateInstructorById,
  deleteInstructorById,
  getInstructorShifts,
  getInstructorById,
  getInstructorApartments,
  getMedicalAppointments,
  addReportToInstructor,
  getResidentsBirthdays,
} = require("../../utilities/routes-functions.js/instructor-queries");
const {
  createNewReport,
  fetchReportsByInstructorId,
} = require("../routes-functions.js/report-queries");
const { createShift } = require("../routes-functions.js/shift-queries");
const { filterBirthdays } = require("../routes-functions.js/helperFunctions");

const {
  getResidentsByApartmentName,
} = require("../routes-functions.js/apartment-queries");
const { response } = require("express");

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
    res.status(200).send({
      message: "updated successfully",
      apartments: response,
    });
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
};

const updateInstructor = async function (req, res) {
  try {
    const instructorId = req.params.instructorId;
    const response = await updateInstructorById(
      instructorId,
      req.body.instructor
    );
    if (!response) {
      res.status(401).send({ message: "error with the updating" });
      return;
    }
    res.status(200).send({
      message: "updated successfully",
      apartments: response,
    });
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
};

const deleteInstructor = async function (req, res) {
  try {
    const instructorId = req.params.instructorId;
    const response = await deleteInstructorById(instructorId);
    if (!response) {
      res.status(401).send({ message: "error with the deleting" });
      return;
    }
    res.status(200).send({
      message: "deleted successfully",
      apartments: response,
    });
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
};

const addShift = async function (req, res) {
  try {
    const instructorId = req.params.instructorId;
    const { coordinatorId, shift, selectedInstructor, selectedApartment } =
      req.body;

    const instructor = await getInstructorById(instructorId);
    const newShift = await createShift(
      coordinatorId,
      selectedInstructor.id,
      shift,
      selectedApartment.id
    );

    await newShift.save();

    instructor.shifts.push(newShift._id);
    await instructor.save();

    res.status(200).json({
      success: true,
      message: "Shift created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error creating shift",
    });
  }
};

const getInstructorShiftsById = async function (req, res) {
  try {
    const instructorId = req.params.id;
    const response = await getInstructorShifts(instructorId);
    if (!response) {
      res.status(401).send({ message: "failed" });
      return;
    }
    res.status(200).send(response.shifts);
  } catch (err) {
    res.status(500).send({ message: "server error" });
  }
};

const getInstructorByInstructorID = async function (req,res){
  const instructorId = req.params.instructorID
  const response = await getInstructorById(instructorId)

  res.status(200).send(response);
} 


const getResidentsByInstructorId = async function (req, res) {
  const instructorId = req.params.id;
  try {
    const instructor = await getInstructorApartments(instructorId);
    const apartments = instructor.apartments;
    const instructorResidents = [];
    for (let apartment of apartments) {
      const apartmentResidents = await getResidentsByApartmentName(
        apartment.apartmentName
      );
      instructorResidents.push(...apartmentResidents);
    }
    res.status(200).send(instructorResidents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//     res.status(200).send(response.shifts);
//   } catch (err) {
//     res.status(500).send({ message: "server error" });
//   }
// };
const getResidentsMedicalAppointments = async function (req, res) {
  try {
    const instructorId = req.params.instructorId;
    const response = await getMedicalAppointments(instructorId);
    if (!response) {
      res.status(401).send({ message: "failed" });
      return;
    }
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ message: "server error" });
  }
};
const getResidentsBirthdaysByInstructorId = async function (req, res) {
  try {
    const instructorId = req.params.instructorId;

    const response = await getResidentsBirthdays(instructorId);
    if (!response) {
      res.status(401).send({ message: "failed" });
      return;
    }
    res.status(200).send(filterBirthdays(response.apartments));
  } catch (err) {
    res.status(500).send({ message: "server error" });
  }
};

const addNewReport = async function (req, res) {
  try {
    const { instructorId, report } = req.body;
    const reportResponse = await createNewReport(report);
    const instructorResponse = await addReportToInstructor(
      instructorId,
      reportResponse
    );
    if (!instructorResponse) {
      res
        .status(401)
        .send({ errorCode: 401, message: "Error with creating a new Report" });
      return;
    }
    res.status(200).send({ message: "Report was created successfully" });
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
};

const fetchAllReportsByInstructorId = async function (req, res) {
  try {
    const { instructorId } = req.body;
    const response = await fetchReportsByInstructorId(instructorId);
    if (!response) {
      res
        .status(401)
        .send({
          errorCode: 401,
          message: "There seems to be a problem fetching your reports",
        });
      return;
    }
    res
      .status(200)
      .send({
        message: "Reports were successfully fetched",
        reports: response,
      });
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
};

module.exports = {
  signIn,
  addNewInstructor,
  updateInstructorApartments,
  addShift,
  getInstructorShiftsById,
  updateInstructor,
  deleteInstructor,
  getResidentsByInstructorId,
  getResidentsMedicalAppointments,
  addNewReport,
  fetchAllReportsByInstructorId,
  getResidentsBirthdaysByInstructorId,
  getInstructorByInstructorID,
};
