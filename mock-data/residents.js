const RESIDENTS = [
  {
    residentId: "RES001",
    firstName: "David",
    lastName: "Cohen",
    dateOfBirth: "1979-06-15",
    gender: "Male",
    image: "./users-images/011.jpg",
    address: {
      value: "15 Dizengoff St, Tel Aviv, Israel",
      wazeLink: "https://waze.com/ul/rt64kj8d",
    },
    budget: 5000,
    allergies: ["Peanuts", "Shellfish"],
    medicalAppointments: [
      {
        typeOfInspection: "2022-06-15",
        attended: true,
      },
      {
        typeOfInspection: "2023-07-10",
        attended: false,
      },
    ],
    emergencyContacts: [
      {
        name: "Rina Levi",
        contactNumber: "054-1234567",
      },
      {
        name: "Avi Cohen",
        contactNumber: "052-9876543",
      },
    ],
  },
  {
    residentId: "RES002",
    firstName: "Sarah",
    lastName: "Levy",
    dateOfBirth: "1985-04-18",
    gender: "Female",
    image: "./users-images/001.jpg",
    address: {
      value: "15 Dizengoff St, Tel Aviv, Israel",
      wazeLink: "https://waze.com/ul/rt64kj8d",
    },
    budget: 3500,
    allergies: ["Eggs", "Fish"],
    medicalAppointments: [
      {
        typeOfInspection: "2021-09-15",
        attended: true,
      },
      {
        typeOfInspection: "2022-12-10",
        attended: true,
      },
    ],
    emergencyContacts: [
      {
        name: "Rachel Green",
        contactNumber: "052-1234567",
      },
      {
        name: "Monica Geller",
        contactNumber: "058-7654321",
      },
    ],
  },
  {
    residentId: "RES003",
    firstName: "Ethan",
    lastName: "Cohen",
    dateOfBirth: "1993-11-07",
    gender: "Male",
    image: "./users-images/012.jpg",
    address: {
      value: "15 Dizengoff St, Tel Aviv, Israel",
      wazeLink: "https://waze.com/ul/rt64kj8d",
    },
    budget: 4000,
    allergies: ["Milk", "Tree Nuts"],
    medicalAppointments: [
      {
        typeOfInspection: "2022-05-20",
        attended: true,
      },
      {
        typeOfInspection: "2023-09-18",
        attended: false,
      },
    ],
    emergencyContacts: [
      {
        name: "Daniel Levin",
        contactNumber: "053-9876543",
      },
      {
        name: "Natalie Cohen",
        contactNumber: "056-3456789",
      },
    ],
  },
  {
    residentId: "RES004",
    firstName: "Olivia",
    lastName: "Miller",
    dateOfBirth: "1978-09-22",
    gender: "Female",
    image: "./users-images/002.jpg",
    address: {
      value: "15 Rothschild Blvd, Tel Aviv, Israel",
      wazeLink: "https://waze.com/ul/rt64kj8d",
    },
    budget: 5000,
    allergies: ["Peanuts", "Soy"],
    medicalAppointments: [
      {
        typeOfInspection: "2023-02-10",
        attended: true,
      },
      {
        typeOfInspection: "2023-05-25",
        attended: false,
      },
    ],
    emergencyContacts: [
      {
        name: "Sophia Johnson",
        contactNumber: "051-9876543",
      },
      {
        name: "Liam Smith",
        contactNumber: "058-3456789",
      },
    ],
  },
  {
    residentId: "RES005",
    firstName: "Sophia",
    lastName: "Anderson",
    dateOfBirth: "1965-07-18",
    gender: "Female",
    image: "./users-images/003.jpg",
    address: {
      value: "15 Rothschild Blvd, Tel Aviv, Israel",
      wazeLink: "https://waze.com/ul/rt64kj8d",
    },
    budget: 5500,
    allergies: ["Eggs", "Fish"],
    medicalAppointments: [
      {
        typeOfInspection: "2023-05-05",
        attended: false,
      },
      {
        typeOfInspection: "2023-05-15",
        attended: false,
      },
    ],
    emergencyContacts: [
      {
        name: "Oliver Martinez",
        contactNumber: "052-3456789",
      },
      {
        name: "Ava Thompson",
        contactNumber: "057-9876543",
      },
    ],
  },
  {
    residentId: "RES006",
    firstName: "William",
    lastName: "Brown",
    dateOfBirth: "1973-11-28",
    gender: "Male",
    image: "./users-images/013.jpg",
    address: {
      value: "20 Allenby St, Tel Aviv, Israel",
      wazeLink: "https://waze.com/ul/rt64kj8d",
    },
    budget: 4000,
    allergies: ["Milk", "Tree Nuts"],
    medicalAppointments: [
      {
        typeOfInspection: "2020-08-12",
        attended: true,
      },
      {
        typeOfInspection: "2023-06-25",
        attended: false,
      },
    ],
    emergencyContacts: [
      {
        name: "Emma Davis",
        contactNumber: "059-1234567",
      },
      {
        name: "Lucas Johnson",
        contactNumber: "054-7654321",
      },
    ],
  },
  {
    residentId: "RES007",
    firstName: "Olivia",
    lastName: "Smith",
    dateOfBirth: "1990-03-12",
    gender: "Female",
    image: "./users-images/004.jpg",
    address: {
      value: "20 Allenby St, Tel Aviv, Israel",
      wazeLink: "https://waze.com/ul/rt64kj8d",
    },
    budget: 6000,
    allergies: ["Peanuts", "Soy"],
    medicalAppointments: [
      {
        typeOfInspection: "2023-09-20",
        attended: false,
      },
      {
        typeOfInspection: "2020-12-10",
        attended: true,
      },
    ],
    emergencyContacts: [
      {
        name: "Noah Wilson",
        contactNumber: "056-2345678",
      },
      {
        name: "Aria Anderson",
        contactNumber: "051-8765432",
      },
    ],
  },
  {
    residentId: "RES008",
    firstName: "Ethan",
    lastName: "Lee",
    dateOfBirth: "1982-06-15",
    gender: "Male",
    image: "./users-images/014.jpg",
    address: {
      value: "20 Allenby St, Tel Aviv, Israel",
      wazeLink: "https://waze.com/ul/rt64kj8d",
    },
    budget: 4500,
    allergies: ["Wheat", "Shellfish"],
    medicalAppointments: [
      {
        typeOfInspection: "2020-11-25",
        attended: true,
      },
      {
        typeOfInspection: "2023-07-08",
        attended: false,
      },
    ],
    emergencyContacts: [
      {
        name: "Mia Taylor",
        contactNumber: "053-9876543",
      },
      {
        name: "Jackson Hernandez",
        contactNumber: "058-1234567",
      },
    ],
  },
  {
    residentId: "RES009",
    firstName: "Sophia",
    lastName: "Lopez",
    dateOfBirth: "1986-11-02",
    gender: "Female",
    image: "./users-images/005.jpg",
    address: {
      value: "20 Allenby St, Tel Aviv, Israel",
      wazeLink: "https://waze.com/ul/rt64kj8d",
    },
    budget: 4800,
    allergies: ["Peanuts", "Fish"],
    medicalAppointments: [
      {
        typeOfInspection: "2022-01-20",
        attended: true,
      },
      {
        typeOfInspection: "2023-03-15",
        attended: true,
      },
    ],
    emergencyContacts: [
      {
        name: "Olivia Cohen",
        contactNumber: "053-5555550",
      },
      {
        name: "Benjamin Levy",
        contactNumber: "058-5555551",
      },
    ],
  },
  {
    residentId: "RES010",
    firstName: "Liam",
    lastName: "Martinez",
    dateOfBirth: "2000-05-10",
    gender: "Male",
    image: "./users-images/015.jpg",
    address: {
      value: "8 Dizengoff St, Tel Aviv, Israel",
      wazeLink: "https://www.waze.com/ul?ll=32.0778,34.7713",
    },
    budget: 4200,
    allergies: ["Gluten", "Sesame"],
    medicalAppointments: [
      {
        typeOfInspection: "2021-09-18",
        attended: true,
      },
      {
        typeOfInspection: "2023-11-05",
        attended: false,
      },
    ],
    emergencyContacts: [
      {
        name: "Michael Goldberg",
        contactNumber: "053-5555552",
      },
      {
        name: "Sophia Jackson",
        contactNumber: "058-5555553",
      },
    ],
  },
  {
    residentId: "RES011",
    firstName: "Oliver",
    lastName: "Wang",
    dateOfBirth: "1975-03-22",
    gender: "Male",
    image: "./users-images/016.jpg",
    address: {
      value: "8 Dizengoff St, Tel Aviv, Israel",
      wazeLink: "https://www.waze.com/ul?ll=32.0778,34.7713",
    },
    budget: 4600,
    allergies: ["Milk", "Eggs"],
    medicalAppointments: [
      {
        typeOfInspection: "2022-09-10",
        attended: true,
      },
      {
        typeOfInspection: "2022-05-25",
        attended: true,
      },
    ],
    emergencyContacts: [
      {
        name: "Emma Kim",
        contactNumber: "053-5555554",
      },
      {
        name: "Sebastian Chen",
        contactNumber: "058-5555555",
      },
    ],
  },
  {
    residentId: "RES012",
    firstName: "Daniel",
    lastName: "Goldberg",
    dateOfBirth: "1990-09-12",
    gender: "Male",
    image: "./users-images/017.jpg",
    address: {
      value: "18 Rothschild Blvd, Tel Aviv, Israel",
      wazeLink: "https://www.waze.com/ul?ll=32.0645,34.7747",
    },
    budget: 4400,
    allergies: ["Tree Nuts", "Mustard"],
    medicalAppointments: [
      {
        typeOfInspection: "2022-11-30",
        attended: true,
      },
      {
        typeOfInspection: "2023-08-22",
        attended: false,
      },
    ],
    emergencyContacts: [
      {
        name: "Grace Lee",
        contactNumber: "053-5555556",
      },
      {
        name: "James Kim",
        contactNumber: "058-5555557",
      },
    ],
  },
  {
    residentId: "RES013",
    firstName: "Sophia",
    lastName: "Chen",
    dateOfBirth: "1988-11-17",
    gender: "Female",
    image: "./users-images/006.jpg",
    address: {
      value: "5 Ben Yehuda St, Tel Aviv, Israel",
      wazeLink: "https://www.waze.com/ul?ll=32.0778,34.7654",
    },
    budget: 4200,
    allergies: ["Soy", "Fish"],
    medicalAppointments: [
      {
        typeOfInspection: "2022-06-28",
        attended: true,
      },
      {
        typeOfInspection: "2023-07-12",
        attended: true,
      },
    ],
    emergencyContacts: [
      {
        name: "Ava Wong",
        contactNumber: "053-5555558",
      },
      {
        name: "Elijah Kim",
        contactNumber: "058-5555559",
      },
    ],
  },
  {
    residentId: "RES014",
    firstName: "Grace",
    lastName: "Liu",
    dateOfBirth: "1985-05-04",
    gender: "Female",
    image: "./users-images/007.jpg",
    address: {
      value: "15 Allenby St, Tel Aviv, Israel",
      wazeLink: "https://www.waze.com/ul?ll=32.0714,34.7707",
    },
    budget: 4000,
    allergies: ["Peanuts", "Sesame"],
    medicalAppointments: [
      {
        typeOfInspection: "2022-07-20",
        attended: true,
      },
      {
        typeOfInspection: "2023-09-18",
        attended: false,
      },
    ],
    emergencyContacts: [
      {
        name: "Liam Chen",
        contactNumber: "053-5555560",
      },
      {
        name: "Aria Kim",
        contactNumber: "058-5555561",
      },
    ],
  },
  {
    residentId: "RES015",
    firstName: "Oliver",
    lastName: "Zhang",
    dateOfBirth: "1990-09-12",
    gender: "Male",
    image: "./users-images/018.jpg",
    address: {
      value: "22 Rothschild Blvd, Tel Aviv, Israel",
      wazeLink: "https://www.waze.com/ul?ll=32.0653,34.7730",
    },
    budget: 3800,
    allergies: ["Milk", "Eggs"],
    medicalAppointments: [
      {
        typeOfInspection: "2022-04-05",
        attended: true,
      },
      {
        typeOfInspection: "2022-11-30",
        attended: true,
      },
    ],
    emergencyContacts: [
      {
        name: "Emma Wang",
        contactNumber: "053-5555562",
      },
      {
        name: "James Chen",
        contactNumber: "058-5555563",
      },
    ],
  },
  {
    residentId: "RES016",
    firstName: "Ava",
    lastName: "Lau",
    dateOfBirth: "1977-03-20",
    gender: "Female",
    image: "./users-images/008.jpg",
    address: {
      value: "10 Dizengoff St, Tel Aviv, Israel",
      wazeLink: "https://www.waze.com/ul?ll=32.0767,34.7754",
    },
    budget: 3600,
    allergies: ["Tree Nuts", "Mustard"],
    medicalAppointments: [
      {
        typeOfInspection: "2022-08-12",
        attended: true,
      },
      {
        typeOfInspection: "2023-05-22",
        attended: false,
      },
    ],
    emergencyContacts: [
      {
        name: "Olivia Wong",
        contactNumber: "053-5555564",
      },
      {
        name: "Noah Kim",
        contactNumber: "058-5555565",
      },
    ],
  },
  {
    residentId: "RES017",
    firstName: "Sophia",
    lastName: "Chow",
    dateOfBirth: "1985-11-18",
    gender: "Female",
    image: "./users-images/009.jpg",
    address: {
      value: "5 Allenby St, Tel Aviv, Israel",
      wazeLink: "https://www.waze.com/ul?ll=32.0689,34.7739",
    },
    budget: 4100,
    allergies: ["Soy", "Fish"],
    medicalAppointments: [
      {
        typeOfInspection: "2022-07-10",
        attended: true,
      },
      {
        typeOfInspection: "2021-02-28",
        attended: true,
      },
    ],
    emergencyContacts: [
      {
        name: "Emily Chan",
        contactNumber: "053-5555566",
      },
      {
        name: "Liam Wong",
        contactNumber: "058-5555567",
      },
    ],
  },
  {
    residentId: "RES018",
    firstName: "Olivia",
    lastName: "Kwan",
    dateOfBirth: "1991-03-22",
    gender: "Female",
    image: "./users-images/010.jpg",
    address: {
      value: "7 Rothschild Blvd, Tel Aviv, Israel",
      wazeLink: "https://www.waze.com/ul?ll=32.0653,34.7743",
    },
    budget: 3800,
    allergies: ["Milk", "Eggs"],
    medicalAppointments: [
      {
        typeOfInspection: "2022-09-15",
        attended: true,
      },
      {
        typeOfInspection: "2023-11-30",
        attended: false,
      },
    ],
    emergencyContacts: [
      {
        name: "Sophie Chen",
        contactNumber: "053-7777788",
      },
      {
        name: "Ryan Liu",
        contactNumber: "058-7777789",
      },
    ],
  },
  {
    residentId: "RES019",
    firstName: "William",
    lastName: "Nguyen",
    dateOfBirth: "1976-08-03",
    gender: "Male",
    image: "./users-images/019.jpg",
    address: {
      value: "9 Dizengoff St, Tel Aviv, Israel",
      wazeLink: "https://www.waze.com/ul?ll=32.0754,34.7743",
    },
    budget: 4400,
    allergies: ["Peanuts", "Tree nuts"],
    medicalAppointments: [
      {
        typeOfInspection: "2023-05-20",
        attended: true,
      },
      {
        typeOfInspection: "2023-09-10",
        attended: false,
      },
    ],
    emergencyContacts: [
      {
        name: "Grace Tran",
        contactNumber: "053-8888899",
      },
      {
        name: "Henry Vo",
        contactNumber: "058-8888890",
      },
    ],
  },
  {
    residentId: "RES020",
    firstName: "James",
    lastName: "Lee",
    dateOfBirth: "1989-02-14",
    gender: "Male",
    image: "./users-images/020.jpg",
    address: {
      value: "12 Allenby St, Tel Aviv, Israel",
      wazeLink: "https://waze.com/ul/rt64kj8d",
    },
    budget: 4500,
    allergies: ["Wheat", "Shellfish"],
    medicalAppointments: [
      {
        typeOfInspection: "2022-11-30",
        attended: true,
      },
      {
        typeOfInspection: "2023-08-22",
        attended: false,
      },
    ],
    emergencyContacts: [
      {
        name: "Emily Chen",
        contactNumber: "053-1234567",
      },
      {
        name: "Alexander Kim",
        contactNumber: "056-7654321",
      },
    ],
  },
];
module.exports = { RESIDENTS };
