// let person1 = {
//     firstName : "Satyam",
//     lastName : "Chauhan",
//     age : 25,


//     fullName : function () {
//         console.log(this.firstName + " " + this.lastName);
//     }

// };

// person1.age = 30

// document.write(person1.firstName);
// console.log(person1.firstName);
// console.log(person1.age);

// person1.fullName(); // Output : Satyam Chauhan


// let person1 = {};
// let person1 = new Object();

// person1.name = "satyam Chauhan";

// person1.sayHi = function () {
//     alert('Hi');
// }

// console.log(person1);

// person1.sayHi();



// Constructor Function

function Person(first, last, ag) {   // first letter capital
    this.firstName = first;
    this.lastName = last;
    this.age = ag;

    this.sayHi = function() {
        alert("Hi");
    }

    this.changeAge = function(newAge) {
        this.age = newAge;
    }
}

let person1 = new Person("Satyam","chauhan",24);

person1.changeAge(53);

let person2 = new Person("Iron","Man",28);

console.log(person1);
console.log(person2);