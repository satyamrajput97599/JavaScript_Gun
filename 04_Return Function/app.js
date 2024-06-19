// function add(a,b) {
    // console.log(a+b);
    // document.write(a+b)
    // let d = a + b;
//     let d = [2,3,4];
    // return 0;
//     return d;
// }

// let c = add(5,7);

// document.write(c)


function compare(a , b) {
    if (a > b) {
        return 1;
    }
    else if (b > a) {
        return -1;
    }
    else {
        return 0;
    }
}

let c = compare(5 , 6);

document.write(c);