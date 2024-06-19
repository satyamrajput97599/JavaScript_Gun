class person {
    constructor(n,a){
        // console.log("person Created");
        this.name = n;
        this.age = a;
    }

    sayHi(){
        console.log(`Hi, my name is ${this.name} and I am Age ${this.age}`)
    }

    static hello(){
        console.log(hello);
    }
}

let person1 = new person("Satyam", 28);

person1.hello();


console.log(person1);