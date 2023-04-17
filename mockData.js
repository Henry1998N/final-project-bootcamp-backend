const Resident = require("./server-manager/models/resident");
const Apartment = require("./server-manager/models/apartment");
const data = require("./mock-data/residents");
const apartmentData = require("./mock-data/apartments");
const {
  connectToDatabase,
} = require("./utilities/database-manager/database-man");
connectToDatabase();
const res = [];

/// i=0 ; i<5
/// i=5 ; i<10
/// i=10 ; i<15
for (let i = 15; i < 20; i++) {
  res.push(
    new Resident({
      residentId: data.RESIDENTS[i].residentId,
      firstName: data.RESIDENTS[i].firstName,
      lastName: data.RESIDENTS[i].lastName,
      dateOfBirth: data.RESIDENTS[i].dateOfBirth,
      gender: data.RESIDENTS[i].gender,
      image: data.RESIDENTS[i].image,
      address: data.RESIDENTS[i].address,
      budget: data.RESIDENTS[i].budget,
      allergies: data.RESIDENTS[i].allergies,
      medicalAppointments: data.RESIDENTS[i].medicalAppointments,
      familyConnections: data.RESIDENTS[i].familyConnections,
      medication: data.RESIDENTS[i].medications,
    })
  );
}
res.forEach((r) => {
  r.save();
});

let apartment = new Apartment({
  apartmentName: apartmentData.apartments[3].apartmentName,
  location: apartmentData.apartments[3].location,
  budget: apartmentData.apartments[3].budget,
  residents: res,
});
apartment.save();
