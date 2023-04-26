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
      });
    });
  });
  return apartmentsWithResidents;
};

module.exports = { filterApartments };
