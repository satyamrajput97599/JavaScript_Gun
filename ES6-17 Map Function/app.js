let arr = [2,3,4,5,60];

// let arr1 = [];

// for (let i = 0; i < array.length; i++) {
    // const element = array[i];
//     arr1[i] = arr[i] * 2;
// }

// console.log(arr1);

let arr1 = arr.map(function (value) {
    return value * 3;
});
console.log(arr1); // [ 6, 9, 12, 15,]

// Arrow function

let arr2 = arr.map((value) => value * 3 );
    
console.log(arr1); // [ 6, 9, 12, 15,]
console.log(arr2); // [ 6, 9, 12, 15,]