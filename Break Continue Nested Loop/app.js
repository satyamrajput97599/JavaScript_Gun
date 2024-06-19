// for(let counter = 1; counter <= 10; counter++) {

//     if(counter == 5) {
//         // break;
//         continue;
//     }
//     document.write(counter);
//     document.write("<br>");

// }



// Nested Loop

outer: for(let counter = 1; counter <= 10; counter++) {

    // if (counter == 3) {
    //     break;
    // }
    document.write(counter);
    document.write("<br>");

    for(let counter2 =1; counter2 < 3; counter2++){

        if (counter == 3) {
            break outer;
        }

        document.write('Satyam');
        document.write("<br>");
    }
}