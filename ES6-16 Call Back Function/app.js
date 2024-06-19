function sayHello() {
    console.log("hello");
}
function sayHi() {
    console.log("hi..");
}

function  add(num1 , num2 , callback) {
    sayHello();
    console.log(num1 + num2);
    callback();
}

let a = 10;
let b = 20;

add(a, b, sayHello);

add(30, 5, sayHi);


add(30, 5, function () {
    console.log("callback function");
});
