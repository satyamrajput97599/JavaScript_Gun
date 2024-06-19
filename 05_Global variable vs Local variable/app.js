// Global variable vs Local variable


let car = "Audi"; // Global Variable

function add() {
    
    let result = 33; //Local Variable

    console.log(result);
    // document.write(result)
    // console.log(car);
}

function sub() {
    let result = 50;
    console.log(result);
}

add();

sub();

// console.log(result);