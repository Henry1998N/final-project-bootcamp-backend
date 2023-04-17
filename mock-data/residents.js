const RESIDENTS = [
    {
        residentId: 'RES001',
        firstName: 'David',
        lastName: 'Cohen',
        dateOfBirth: '1979-06-15',
        gender: 'Male',
        image: 'https://media.licdn.com/dms/image/C5603AQHBRGTKfjlZdg/profile-displayphoto-shrink_800_800/0/1621533275711?e=2147483647&v=beta&t=F0HxYugSexf7IvPbHEuJWRscBjWiAS6caoM4UP9zN-Q',
        address: {
            value: '15 Dizengoff St, Tel Aviv, Israel',
            wazeLink: 'https://waze.com/ul/rt64kj8d',
        },
        budget: 5000,
        allergies: ['Peanuts', 'Shellfish'],
        medicalAppointments: [
            {
                attended: false,
                time: '09:15',
                typeOfInspection: 'Throat Infection Examination',
                date: '2023-04-20',
            },
            {
                attended: false,
                time: '11:30',
                typeOfInspection: 'Hearing Loss Evaluation',
                date: '2023-04-22',
            },
        ],
        familyConnections: [
            {
                name: 'Rina Levi',
                contactNumber: '054-1234567',
            },
            {
                name: 'Avi Cohen',
                contactNumber: '052-9876543',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Antihistamine',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            afternoon: [
                {
                    medicationName: 'Nasal Spray',
                    dosage: '2 sprays',
                    status: false,
                },
                {
                    medicationName: 'Pain Reliever',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            evening: [
                {
                    medicationName: 'Decongestant',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
        },
    },
    {
        residentId: 'RES002',
        firstName: 'Sarah',
        lastName: 'Levy',
        dateOfBirth: '1985-04-18',
        gender: 'Female',
        image: 'https://cdn2-sr-application.sportsrecruits.com/images/lacrosserecruits/2020/11/f61520752a0d4325cc877425ca0b0ba1.jpg',
        address: {
            value: '15 Dizengoff St, Tel Aviv, Israel',
            wazeLink: 'https://waze.com/ul/rt64kj8d',
        },
        budget: 3500,
        allergies: ['Eggs', 'Fish'],
        medicalAppointments: [
            {
                attended: false,
                time: '14:45',
                typeOfInspection: 'Sinusitis Assessment',
                date: '2023-04-25',
            },
        ],
        familyConnections: [
            {
                name: 'Rachel Green',
                contactNumber: '052-1234567',
            },
            {
                name: 'Monica Geller',
                contactNumber: '058-7654321',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Cough Syrup',
                    dosage: '2 teaspoons',
                    status: false,
                },
            ],
            afternoon: [
                {
                    medicationName: 'Inhaler',
                    dosage: '1 puff',
                    status: false,
                },
            ],
            evening: [
                {
                    medicationName: 'Expectorant',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
        },
    },
    {
        residentId: 'RES003',
        firstName: 'Ethan',
        lastName: 'Cohen',
        dateOfBirth: '1993-11-07',
        gender: 'Male',
        image: 'https://media.licdn.com/dms/image/C4D03AQGkBk7PbsXI5w/profile-displayphoto-shrink_800_800/0/1634674720491?e=2147483647&v=beta&t=xp-opkIF4wGDd7Cw8qOpf6zsGz1U3FepZhJKKY0LMD8',
        address: {
            value: '15 Dizengoff St, Tel Aviv, Israel',
            wazeLink: 'https://waze.com/ul/rt64kj8d',
        },
        budget: 4000,
        allergies: ['Milk', 'Tree Nuts'],
        medicalAppointments: [
            {
                attended: false,
                time: '16:30',
                typeOfInspection: 'Tonsillitis Diagnosis',
                date: '2023-04-27',
            },
            {
                attended: false,
                time: '10:00',
                typeOfInspection: 'Sleep Apnea Screening',
                date: '2023-04-30',
            },
        ],
        familyConnections: [
            {
                name: 'Daniel Levin',
                contactNumber: '053-9876543',
            },
            {
                name: 'Natalie Cohen',
                contactNumber: '056-3456789',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Antacid',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            afternoon: [],
            evening: [
                {
                    medicationName: 'Probiotic',
                    dosage: '1 capsule',
                    status: false,
                },
            ],
        },
    },
    {
        residentId: 'RES004',
        firstName: 'Olivia',
        lastName: 'Miller',
        dateOfBirth: '1978-09-22',
        gender: 'Female',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Sophie_Thompson_2014.jpg',
        address: {
            value: '15 Rothschild Blvd, Tel Aviv, Israel',
            wazeLink: 'https://waze.com/ul/rt64kj8d',
        },
        budget: 5000,
        allergies: ['Peanuts', 'Soy'],
        medicalAppointments: [
            {
                attended: false,
                time: '13:15',
                typeOfInspection: 'Vertigo Evaluation',
                date: '2023-05-03',
            },
            {
                attended: false,
                time: '15:30',
                typeOfInspection: 'Allergic Rhinitis Assessment',
                date: '2023-05-05',
            },
        ],
        familyConnections: [
            {
                name: 'Sophia Johnson',
                contactNumber: '051-9876543',
            },
            {
                name: 'Liam Smith',
                contactNumber: '058-3456789',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Vitamin D',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            afternoon: [
                {
                    medicationName: 'Anti-inflammatory',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            evening: [],
        },
    },
    {
        residentId: 'RES005',
        firstName: 'Sophia',
        lastName: 'Anderson',
        dateOfBirth: '1965-07-18',
        gender: 'Female',
        image: 'https://i.pinimg.com/originals/ff/50/56/ff5056012fbb19f53ab9285035df2a23.jpg',
        address: {
            value: '15 Rothschild Blvd, Tel Aviv, Israel',
            wazeLink: 'https://waze.com/ul/rt64kj8d',
        },
        budget: 5500,
        allergies: ['Eggs', 'Fish'],
        medicalAppointments: [
            {
                attended: false,
                time: '11:45',
                typeOfInspection: 'Laryngitis Diagnosis',
                date: '2023-05-08',
            },
            {
                attended: false,
                time: '14:00',
                typeOfInspection: 'Earwax Removal',
                date: '2023-05-10',
            },
        ],
        familyConnections: [
            {
                name: 'Oliver Martinez',
                contactNumber: '052-3456789',
            },
            {
                name: 'Ava Thompson',
                contactNumber: '057-9876543',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Antibiotic',
                    dosage: '1 capsule',
                    status: false,
                },
            ],
            afternoon: [
                {
                    medicationName: 'Eye Drops',
                    dosage: '1 drop',
                    status: false,
                },
            ],
            evening: [
                {
                    medicationName: 'Nasal Spray',
                    dosage: '2 sprays',
                    status: false,
                },
            ],
        },
    },
    {
        residentId: 'RES006',
        firstName: 'William',
        lastName: 'Brown',
        dateOfBirth: '1973-11-28',
        gender: 'Male',
        image: 'https://media.licdn.com/dms/image/C4D03AQFZyIzfTRUa6A/profile-displayphoto-shrink_800_800/0/1658651914569?e=2147483647&v=beta&t=Pk_DVOBFYbXvN1Hn_qhJhOpysl4rvsRBW2Kf4tdjhtg',
        address: {
            value: '20 Allenby St, Tel Aviv, Israel',
            wazeLink: 'https://waze.com/ul/rt64kj8d',
        },
        budget: 4000,
        allergies: ['Milk', 'Tree Nuts'],
        medicalAppointments: [
            {
                attended: false,
                time: '16:15',
                typeOfInspection: 'Rhinoplasty Consultation',
                date: '2023-05-12',
            },
            {
                attended: false,
                time: '09:30',
                typeOfInspection: 'Hearing Aid Fitting',
                date: '2023-05-13',
            },
        ],
        familyConnections: [
            {
                name: 'Emma Davis',
                contactNumber: '059-1234567',
            },
            {
                name: 'Lucas Johnson',
                contactNumber: '054-7654321',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Insulin',
                    dosage: '10 units',
                    status: false,
                },
            ],
            afternoon: [
                {
                    medicationName: 'Oral Hypoglycemic',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            evening: [
                {
                    medicationName: 'Blood Pressure Medication',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
        },
    },
    {
        residentId: 'RES007',
        firstName: 'Olivia',
        lastName: 'Smith',
        dateOfBirth: '1990-03-12',
        gender: 'Female',
        image: 'https://cdn.ldsliving.com/dims4/default/231311f/2147483647/strip/true/crop/419x314+111+0/resize/800x600!/quality/90/?url=http%3A%2F%2Flds-living-brightspot.s3.amazonaws.com%2Fb7%2F0a%2F42a12bae49beca68fb7e4c36daad%2F61149.jpg',
        address: {
            value: '20 Allenby St, Tel Aviv, Israel',
            wazeLink: 'https://waze.com/ul/rt64kj8d',
        },
        budget: 6000,
        allergies: ['Peanuts', 'Soy'],
        medicalAppointments: [
            {
                attended: false,
                time: '11:00',
                typeOfInspection: 'Adenoidectomy Evaluation',
                date: '2023-05-15',
            },
            {
                attended: false,
                time: '11:45',
                typeOfInspection: 'Ophthalmology',
                date: '2023-06-24',
            },
        ],
        familyConnections: [
            {
                name: 'Noah Wilson',
                contactNumber: '056-2345678',
            },
            {
                name: 'Aria Anderson',
                contactNumber: '051-8765432',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Antacid',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            afternoon: [],
            evening: [
                {
                    medicationName: 'Probiotic',
                    dosage: '1 capsule',
                    status: false,
                },
            ],
        },
    },
    {
        residentId: 'RES008',
        firstName: 'Ethan',
        lastName: 'Lee',
        dateOfBirth: '1982-06-15',
        gender: 'Male',
        image: 'https://media.licdn.com/dms/image/C5603AQEV3RNGxtDKUg/profile-displayphoto-shrink_800_800/0/1602191782000?e=2147483647&v=beta&t=rIOyO7RNzchbg2E3p9OK6pv6ic-FcCCuUXdI_u13GJI',
        address: {
            value: '20 Allenby St, Tel Aviv, Israel',
            wazeLink: 'https://waze.com/ul/rt64kj8d',
        },
        budget: 4500,
        allergies: ['Wheat', 'Shellfish'],
        medicalAppointments: [
            {
                attended: false,
                time: '14:30',
                typeOfInspection: 'Vocal Cord Nodule Assessment',
                date: '2023-05-16',
            },
            {
                attended: false,
                time: '16:45',
                typeOfInspection: 'Nasal Polyps Examination',
                date: '2023-05-17',
            },
        ],
        familyConnections: [
            {
                name: 'Mia Taylor',
                contactNumber: '053-9876543',
            },
            {
                name: 'Jackson Hernandez',
                contactNumber: '058-1234567',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Vitamin D',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            afternoon: [
                {
                    medicationName: 'Anti-inflammatory',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            evening: [],
        },
    },
    {
        residentId: 'RES009',
        firstName: 'Sophia',
        lastName: 'Lopez',
        dateOfBirth: '1986-11-02',
        gender: 'Female',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwH4ixBZiwTFvxx3_pWjHDMu8CA9mjcd3Tg&usqp=CAU',
        address: {
            value: '20 Allenby St, Tel Aviv, Israel',
            wazeLink: 'https://waze.com/ul/rt64kj8d',
        },
        budget: 4800,
        allergies: ['Peanuts', 'Fish'],
        medicalAppointments: [
            {
                attended: false,
                time: '10:30',
                typeOfInspection: 'Otitis Media Diagnosis',
                date: '2023-05-18',
            },
            {
                attended: false,
                time: '15:15',
                typeOfInspection: 'Snoring Evaluation',
                date: '2023-05-19',
            },
        ],
        familyConnections: [
            {
                name: 'Olivia Cohen',
                contactNumber: '053-5555550',
            },
            {
                name: 'Benjamin Levy',
                contactNumber: '058-5555551',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Antibiotic',
                    dosage: '1 capsule',
                    status: false,
                },
            ],
            afternoon: [
                {
                    medicationName: 'Eye Drops',
                    dosage: '1 drop',
                    status: false,
                },
            ],
            evening: [
                {
                    medicationName: 'Nasal Spray',
                    dosage: '2 sprays',
                    status: false,
                },
            ],
        },
    },
    {
        residentId: 'RES010',
        firstName: 'Liam',
        lastName: 'Martinez',
        dateOfBirth: '2000-05-10',
        gender: 'Male',
        image: 'https://media.licdn.com/dms/image/D4E03AQG8CfwX3l6Y6Q/profile-displayphoto-shrink_800_800/0/1669109154191?e=2147483647&v=beta&t=-f6HthoL-WPXehWzNDRkMcsUkOOTu0XC0y7kAbwQ9Ow',
        address: {
            value: '8 Dizengoff St, Tel Aviv, Israel',
            wazeLink: 'https://www.waze.com/ul?ll=32.0778,34.7713',
        },
        budget: 4200,
        allergies: ['Gluten', 'Sesame'],
        medicalAppointments: [
            {
                attended: false,
                time: '11:30',
                typeOfInspection: 'Hearing Test',
                date: '2023-05-20',
            },
            {
                attended: false,
                time: '14:45',
                typeOfInspection: 'Tinnitus Assessment',
                date: '2023-05-20',
            },
        ],
        familyConnections: [
            {
                name: 'Michael Goldberg',
                contactNumber: '053-5555552',
            },
            {
                name: 'Sophia Jackson',
                contactNumber: '058-5555553',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Insulin',
                    dosage: '10 units',
                    status: false,
                },
            ],
            afternoon: [
                {
                    medicationName: 'Oral Hypoglycemic',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            evening: [
                {
                    medicationName: 'Blood Pressure Medication',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
        },
    },
    {
        residentId: 'RES011',
        firstName: 'Oliver',
        lastName: 'Wang',
        dateOfBirth: '1975-03-22',
        gender: 'Male',
        image: 'https://media.licdn.com/dms/image/C4D03AQFFoIBpdyCrow/profile-displayphoto-shrink_800_800/0/1610733552818?e=2147483647&v=beta&t=kBUQVZpwgRCfjO_gfQxIEf7sZPoib542gEMHpp3Nxs8',
        address: {
            value: '8 Dizengoff St, Tel Aviv, Israel',
            wazeLink: 'https://www.waze.com/ul?ll=32.0778,34.7713',
        },
        budget: 4600,
        allergies: ['Milk', 'Eggs'],
        medicalAppointments: [
            {
                attended: false,
                time: '16:30',
                typeOfInspection: 'Nasal Congestion Evaluation',
                date: '2023-05-19',
            },
            {
                attended: false,
                time: '10:00',
                typeOfInspection: 'Otolaryngology Consultation',
                date: '2023-05-20',
            },
        ],
        familyConnections: [
            {
                name: 'Emma Kim',
                contactNumber: '053-5555554',
            },
            {
                name: 'Sebastian Chen',
                contactNumber: '058-5555555',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Antiemetic',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            afternoon: [
                {
                    medicationName: 'Inhaler',
                    dosage: '1 puff',
                    status: false,
                },
            ],
            evening: [
                {
                    medicationName: 'Expectorant',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
        },
    },
    {
        residentId: 'RES012',
        firstName: 'Daniel',
        lastName: 'Goldberg',
        dateOfBirth: '1990-09-12',
        gender: 'Male',
        image: 'https://media.licdn.com/dms/image/C5603AQFdI4gMJO0Mlg/profile-displayphoto-shrink_800_800/0/1652147617811?e=2147483647&v=beta&t=qV89-hjzDzISWi69K6qd1fFgQG9YbNb9ZKWUdNklvk8',
        address: {
            value: '18 Rothschild Blvd, Tel Aviv, Israel',
            wazeLink: 'https://www.waze.com/ul?ll=32.0645,34.7747',
        },
        budget: 4400,
        allergies: ['Tree Nuts', 'Mustard'],
        medicalAppointments: [
            {
                attended: false,
                time: '10:30',
                typeOfInspection: 'Dermatology',
                date: '2023-04-25',
            },
            {
                attended: false,
                time: '14:15',
                typeOfInspection: 'Gastroenterology',
                date: '2023-04-28',
            },
        ],
        familyConnections: [
            {
                name: 'Grace Lee',
                contactNumber: '053-5555556',
            },
            {
                name: 'James Kim',
                contactNumber: '058-5555557',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Antacid',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            afternoon: [],
            evening: [
                {
                    medicationName: 'Probiotic',
                    dosage: '1 capsule',
                    status: false,
                },
            ],
        },
    },
    {
        residentId: 'RES013',
        firstName: 'Sophia',
        lastName: 'Chen',
        dateOfBirth: '1988-11-17',
        gender: 'Female',
        image: 'https://media.licdn.com/dms/image/C4E03AQEBmd19UBQe2w/profile-displayphoto-shrink_800_800/0/1615513928582?e=2147483647&v=beta&t=aNhGAKf3ABd-ptMWT0-T8KFbvWgteRE7UMNzofc7B48',
        address: {
            value: '5 Ben Yehuda St, Tel Aviv, Israel',
            wazeLink: 'https://www.waze.com/ul?ll=32.0778,34.7654',
        },
        budget: 4200,
        allergies: ['Soy', 'Fish'],
        medicalAppointments: [
            {
                attended: false,
                time: '09:45',
                typeOfInspection: 'Cardiology',
                date: '2023-05-02',
            },
            {
                attended: false,
                time: '16:30',
                typeOfInspection: 'Obstetrics and Gynecology',
                date: '2023-05-05',
            },
        ],
        familyConnections: [
            {
                name: 'Ava Wong',
                contactNumber: '053-5555558',
            },
            {
                name: 'Elijah Kim',
                contactNumber: '058-5555559',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Antibiotic',
                    dosage: '1 capsule',
                    status: false,
                },
            ],
            afternoon: [
                {
                    medicationName: 'Eye Drops',
                    dosage: '1 drop',
                    status: false,
                },
            ],
            evening: [
                {
                    medicationName: 'Nasal Spray',
                    dosage: '2 sprays',
                    status: false,
                },
            ],
        },
    },
    {
        residentId: 'RES014',
        firstName: 'Grace',
        lastName: 'Liu',
        dateOfBirth: '1985-05-04',
        gender: 'Female',
        image: 'https://media.licdn.com/dms/image/C5603AQHJU7YsdYfHsQ/profile-displayphoto-shrink_800_800/0/1568898860353?e=2147483647&v=beta&t=Xhkyov9q9gwWtz0jQp_6uMzY42nyIXmHzniOI44gBx8',
        address: {
            value: '15 Allenby St, Tel Aviv, Israel',
            wazeLink: 'https://www.waze.com/ul?ll=32.0714,34.7707',
        },
        budget: 4000,
        allergies: ['Peanuts', 'Sesame'],
        medicalAppointments: [
            {
                attended: false,
                time: '11:00',
                typeOfInspection: 'Endocrinology',
                date: '2023-05-08',
            },
            {
                attended: false,
                time: '13:45',
                typeOfInspection: 'Nephrology',
                date: '2023-05-12',
            },
        ],
        familyConnections: [
            {
                name: 'Liam Chen',
                contactNumber: '053-5555560',
            },
            {
                name: 'Aria Kim',
                contactNumber: '058-5555561',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Insulin',
                    dosage: '10 units',
                    status: false,
                },
            ],
            afternoon: [
                {
                    medicationName: 'Oral Hypoglycemic',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            evening: [
                {
                    medicationName: 'Blood Pressure Medication',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
        },
    },
    {
        residentId: 'RES015',
        firstName: 'Oliver',
        lastName: 'Zhang',
        dateOfBirth: '1990-09-12',
        gender: 'Male',
        image: 'https://media.licdn.com/dms/image/C4E03AQHxFsCv718mGg/profile-displayphoto-shrink_800_800/0/1566878724703?e=2147483647&v=beta&t=v_qbP61zglGPAtguaTPHKwSqSn9NcN57ybTExA-2b6M',
        address: {
            value: '22 Rothschild Blvd, Tel Aviv, Israel',
            wazeLink: 'https://www.waze.com/ul?ll=32.0653,34.7730',
        },
        budget: 3800,
        allergies: ['Milk', 'Eggs'],
        medicalAppointments: [
            {
                attended: false,
                time: '15:30',
                typeOfInspection: 'Rheumatology',
                date: '2023-05-15',
            },
            {
                attended: false,
                time: '12:15',
                typeOfInspection: 'Pediatrics',
                date: '2023-05-18',
            },
        ],
        familyConnections: [
            {
                name: 'Emma Wang',
                contactNumber: '053-5555562',
            },
            {
                name: 'James Chen',
                contactNumber: '058-5555563',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Antiemetic',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            afternoon: [
                {
                    medicationName: 'Inhaler',
                    dosage: '1 puff',
                    status: false,
                },
            ],
            evening: [
                {
                    medicationName: 'Expectorant',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
        },
    },
    {
        residentId: 'RES016',
        firstName: 'Ava',
        lastName: 'Lau',
        dateOfBirth: '1977-03-20',
        gender: 'Female',
        image: 'https://media.licdn.com/dms/image/C5603AQEN2WwZLMQEAg/profile-displayphoto-shrink_800_800/0/1613998803121?e=2147483647&v=beta&t=C3GAyFo44W6qnlbN_4-MX68Gi0QaISZfuy7cSQAARVE',
        address: {
            value: '10 Dizengoff St, Tel Aviv, Israel',
            wazeLink: 'https://www.waze.com/ul?ll=32.0767,34.7754',
        },
        budget: 3600,
        allergies: ['Tree Nuts', 'Mustard'],
        medicalAppointments: [
            {
                attended: false,
                time: '08:45',
                typeOfInspection: 'Ophthalmology',
                date: '2023-05-21',
            },
            {
                attended: false,
                time: '14:30',
                typeOfInspection: 'Dentistry',
                date: '2023-05-24',
            },
        ],
        familyConnections: [
            {
                name: 'Olivia Wong',
                contactNumber: '053-5555564',
            },
            {
                name: 'Noah Kim',
                contactNumber: '058-5555565',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Antacid',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            afternoon: [],
            evening: [
                {
                    medicationName: 'Probiotic',
                    dosage: '1 capsule',
                    status: false,
                },
            ],
        },
    },
    {
        residentId: 'RES017',
        firstName: 'Sophia',
        lastName: 'Chow',
        dateOfBirth: '1985-11-18',
        gender: 'Female',
        image: 'https://media.licdn.com/dms/image/C5603AQG5SRRVxjZi1w/profile-displayphoto-shrink_800_800/0/1517244164268?e=2147483647&v=beta&t=qm_Ydy9FPCq524lukLkAYiNo6UDkbBssIAXU0OVD9T8',
        address: {
            value: '5 Allenby St, Tel Aviv, Israel',
            wazeLink: 'https://www.waze.com/ul?ll=32.0689,34.7739',
        },
        budget: 4100,
        allergies: ['Soy', 'Fish'],
        medicalAppointments: [
            {
                attended: false,
                time: '11:30',
                typeOfInspection: 'Orthopedics',
                date: '2023-05-27',
            },
            {
                attended: false,
                time: '16:00',
                typeOfInspection: 'Dermatology',
                date: '2023-05-30',
            },
        ],
        familyConnections: [
            {
                name: 'Emily Chan',
                contactNumber: '053-5555566',
            },
            {
                name: 'Liam Wong',
                contactNumber: '058-5555567',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Vitamin D',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            afternoon: [
                {
                    medicationName: 'Anti-inflammatory',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            evening: [],
        },
    },
    {
        residentId: 'RES018',
        firstName: 'Olivia',
        lastName: 'Kwan',
        dateOfBirth: '1991-03-22',
        gender: 'Female',
        image: 'https://media.licdn.com/dms/image/C5603AQG5hxwd7zHaZQ/profile-displayphoto-shrink_800_800/0/1589317953953?e=2147483647&v=beta&t=zvnEK85Q5fqUJB8CQCRB6qGvHQDhsJoQ3nqbL5uOzTo',
        address: {
            value: '7 Rothschild Blvd, Tel Aviv, Israel',
            wazeLink: 'https://www.waze.com/ul?ll=32.0653,34.7743',
        },
        budget: 3800,
        allergies: ['Milk', 'Eggs'],
        medicalAppointments: [
            {
                attended: false,
                time: '09:15',
                typeOfInspection: 'Gastroenterology',
                date: '2023-06-02',
            },
            {
                attended: false,
                time: '17:30',
                typeOfInspection: 'Cardiology',
                date: '2023-06-05',
            },
        ],
        familyConnections: [
            {
                name: 'Sophie Chen',
                contactNumber: '053-7777788',
            },
            {
                name: 'Ryan Liu',
                contactNumber: '058-7777789',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Antibiotic',
                    dosage: '1 capsule',
                    status: false,
                },
            ],
            afternoon: [
                {
                    medicationName: 'Eye Drops',
                    dosage: '1 drop',
                    status: false,
                },
            ],
            evening: [
                {
                    medicationName: 'Nasal Spray',
                    dosage: '2 sprays',
                    status: false,
                },
            ],
        },
    },
    {
        residentId: 'RES019',
        firstName: 'William',
        lastName: 'Nguyen',
        dateOfBirth: '1976-08-03',
        gender: 'Male',
        image: 'https://media.licdn.com/dms/image/C5603AQE_Mvr_vhZBHw/profile-displayphoto-shrink_800_800/0/1635989658141?e=2147483647&v=beta&t=_nZbWGxOjv0wIa5V0VfO3cC9TKfoNuLo_SztkHHK_EY',
        address: {
            value: '9 Dizengoff St, Tel Aviv, Israel',
            wazeLink: 'https://www.waze.com/ul?ll=32.0754,34.7743',
        },
        budget: 4400,
        allergies: ['Peanuts', 'Tree nuts'],
        medicalAppointments: [
            {
                attended: false,
                time: '10:00',
                typeOfInspection: 'Endocrinology',
                date: '2023-06-12',
            },
            {
                attended: false,
                time: '15:30',
                typeOfInspection: 'Nephrology',
                date: '2023-06-15',
            },
        ],
        familyConnections: [
            {
                name: 'Grace Tran',
                contactNumber: '053-8888899',
            },
            {
                name: 'Henry Vo',
                contactNumber: '058-8888890',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Painkiller',
                    dosage: '2 tablets',
                    status: false,
                },
            ],
            afternoon: [
                {
                    medicationName: 'Antihistamine',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            evening: [
                {
                    medicationName: 'Sleep Aid',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
        },
    },
    {
        residentId: 'RES020',
        firstName: 'James',
        lastName: 'Lee',
        dateOfBirth: '1989-02-14',
        gender: 'Male',
        image: 'https://media.licdn.com/dms/image/C4E03AQFnT9JnscJBCw/profile-displayphoto-shrink_800_800/0/1516272933895?e=2147483647&v=beta&t=oOnk8qcH6DwILbzMKrx7s96HJ1OiS1Q0WZArJW0ko9U',
        address: {
            value: '12 Allenby St, Tel Aviv, Israel',
            wazeLink: 'https://waze.com/ul/rt64kj8d',
        },
        budget: 4500,
        allergies: ['Wheat', 'Shellfish'],
        medicalAppointments: [
            {
                attended: false,
                time: '14:15',
                typeOfInspection: 'Rheumatology',
                date: '2023-06-18',
            },
            {
                attended: false,
                time: '12:30',
                typeOfInspection: 'Pediatrics',
                date: '2023-06-21',
            },
        ],
        familyConnections: [
            {
                name: 'Emily Chen',
                contactNumber: '053-1234567',
            },
            {
                name: 'Alexander Kim',
                contactNumber: '056-7654321',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Anti-anxiety',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            afternoon: [
                {
                    medicationName: 'Mood Stabilizer',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            evening: [
                {
                    medicationName: 'Antidepressant',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
        },
    },
]
module.exports = { RESIDENTS }
