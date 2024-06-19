// let person1 = {};

// console.log(person1);


// let person2 = {
//     name: "John",
//     age: 30,
//     occupation: "Developer",
// };


// function Person(n) {
//     this.name = n;
// }

// let person3 = new Person("Chauhan")

// console.log(person2);
// console.log(person2.hasOwnProperty('name'));

// console.log(person3);


function  Person(first, last, a) {
    this.firstName = first;
    this.lastName = last;
    this.age = a;

    this.fullName = function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

Person.prototype.fullName = function (params) {
    console.log(this.firstName + " " + this.lastName );
}

let person1 = new Person("Satyam","Chauhan",24);
let person2 = new Person("Iron","Man",24);


console.log(person1);
console.log(person2);