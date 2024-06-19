var person = {
    name: "satyam",
    age: 25,

    // getname: function() {
    //     return this.name.toUpperCase();
    // }

    // get getname() {
    //     return this.name.toUpperCase();
    // },

    set setname(n) {
        this.name = n.toUpperCase();
    }
};

person.setname = "rajput";

// person.name = "chauhan";

console.log(person);