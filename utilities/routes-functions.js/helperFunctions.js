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
      });
    });
  });
  return apartmentsWithResidents;
};

module.exports = { filterApartments };
