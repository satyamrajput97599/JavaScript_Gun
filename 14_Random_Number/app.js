// let x = Math.floor(Math.random() * 10) + 1; 


function getRandom(min, max) {
    let x= Math.floor(Math.random() * (max - min + 1) ) + 15

   return x;
}

console.log(getRandom(10, 20));