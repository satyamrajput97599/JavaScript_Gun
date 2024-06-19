var user = {
    id : 101,
    email : "satyam@gmail.com",

    personalInfo: { // personal object
        name: "ABC",
        address: {
            degree: "BSC",
            city: "Doon",
            country: "india"
        }
    } 
};

console.log(user.personalInfo.address.country); // nested Object