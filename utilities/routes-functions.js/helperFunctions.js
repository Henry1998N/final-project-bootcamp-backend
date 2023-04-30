const filterApartments = function (coordinator) {
  const apartmentsWithResidents = [];

  coordinator.instructors.forEach((instructor) => {
    instructor.apartments.forEach((apartment) => {
      apartmentsWithResidents.push({
        apartmentId: apartment._id,
        apartmentName: apartment.apartmentName,
        address: apartment.address,
        budget: apartment.budget,
        residents: apartment.residents,
        image: apartment._doc.image,
        instructorId: instructor._id,
        instructorName: instructor._doc.name,
      });
    });
  });
  return apartmentsWithResidents;
};
const filterBirthdays = function (apartments) {
  const filteredBirthdays = [];
  apartments.forEach((a) => {
    a.residents.forEach((r) => {
      filteredBirthdays.push({
        apartmentName: a.apartmentName,
        residentName: r.firstName + " " + r.lastName,
        startDate: r.dateOfBirth,
        endDate: r.dateOfBirth,
      });
    });
  });

  return filteredBirthdays;
};
module.exports = { filterApartments, filterBirthdays };
