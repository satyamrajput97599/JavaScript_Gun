function Student(first, last, age, cls){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
}

Student.prototype.nationality = "Indian";

 var student1 = new Student("satyam","chauhan",22, 5);
 var student2 = new Student("Raj","Rajput",22, 5);

 Student.prototype.name = function(){
    return this.firstName = function () {
        return this.firstName + " " + this.lastName;
    }
 }


console.log(student1.name());