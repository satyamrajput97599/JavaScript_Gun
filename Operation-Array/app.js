let book = ["Math","Physics","Biology","Computer"];

// let bookLength = book.length;

// for (i = 0; i < bookLength; i++) {
//     console.log(`Element ${i} is ${book[i]} \n`);
    
// }

// let bookWithPage = [
//     ["Math", ["300","500"]],
//     ["Hindi","100"],
//     ["English","150"]
// ];

// let fetch = bookWithPage[0][1][1];

// console.log(fetch);


// let book2 = ["Hindi","English"];

// let book3 = ["SST","Urdu"];

// let NewBook = book.concat(book2,book3);

// book.push("Hindi");
// book.unshift("Hindi");
// book.shift();
// book.pop();
// book.pop();

// book.splice(1,1)

// book = [];
// book,length = 0;

// let book = "Math";

// let position = book.indexOf("Bio");


// console.log(position);
// console.log(Array.isArray(book));


// let text = "This is a random text";

// let wordarray = text.split(' ');

// let wordarray = book.join(' ');

// let wordarray = book.join('-');

// console.log(bookWithPage);


book.forEach(myfun);

function myfun(value) {
    console.log(value);
}