// Object Properties


let person = {
    'firstName': 'Satyam',
    'lastName': 'Chauhan',
};

person.age = 25;

// person.firstName = 'Rajput';

// delete person.lastName;

// console.log('height' in person);


for (let key in person) {
    console.log(key + " : " +person [key]);
    
}