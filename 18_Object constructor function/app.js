// var student1 = {
//     firstName : 'satyam',
//     lastName : "chauhan",
//     age: 25,
//     class: 5
// }

// var student1 = {
//     firstName : 'satyam',
//     lastName : "chauhan",
//     age: 25,
//     class: 5
// }

function Student(first, last, age, cls){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
}
 var student1 = new Student("satyam","chauhan",22, 5);
//  var student2 = new Student("Raj","chauhan",22, 5);
//  var student3 = new Student("Ankur","rajput",22, 5);

student1.nationality = "Indian";

//  console.log(student1);
//  document.write('Student1');

student1.name = function(){
    return this.firstName + " " + this.lastName;
}

console.log(student1.name);