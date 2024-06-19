let person = {
    firstName: 'Satyam',
    lastName: 'Chauhan',
    sayHello () { /// 4th Method
            console.log("Hello !");
            document.write("Hello");
        }
};


person.age = 22

// person.sayHello = function () {
//     console.log("Hello !");
//     document.write("Hello")
// }


// 2nd Method

// function greet(){
//     console.log("Hello !");
// }

// person.sayHello = greet;

person.sayHello();