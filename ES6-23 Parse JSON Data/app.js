let data = `{
    "name" : "Satyam",
    "age" : 25,
    "is_student" : true,
    "password_no" : null,
    "p_lan" : ["Java","PHP","C","C++"],
    "address" : {
        "street" : "Dehradun",
        "city" : "New York",
        "pincode" : 248001
    }
}`;

let dObject = JSON.parse(data);

console.log(dObject);
console.log(dObject['name']);
console.log(dObject['age']);
console.log(dObject['p_lan'][1]);
console.log(dObject['address']['pincode']);