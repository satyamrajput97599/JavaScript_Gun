// The Argument Number

function add() {
    
    if (arguments.length == 0) {
        console.log("No Argument Passed !");
    }else {
        let sum = 0; 
        for (let i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i];
        }
        console.log(sum);
    }
    // console.log(arguments[2])

}

let addition = add;

addition(5,2);

add(5,7,10);
