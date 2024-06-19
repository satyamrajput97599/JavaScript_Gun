let arr = [2, 12, 13, 5, 6, 4, 7]

// Result[22, 13, 61, 23];

// let arr1 = arr.filter(value => value > 10);
// let arr1 = arr.filter(function (value){
//     return value > 10;
// })

// console.log(arr1);


let team = [
    {
        name: "John",
        age: 25,
        salary: 50000,
    },
    {
        name: "Alice",
        age: 30,
        salary: 60000,
    },
    {
        name: "Bob",
        age: 35,
        salary: 70000,
    }
];

let salary = team.filter(value => value.position == "salary");

console.log(salary);