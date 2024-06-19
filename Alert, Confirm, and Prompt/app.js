// function to interact with the user: alert, prompt and confirm

/*
1. alert() - show a message

2. prompt() - show a message, input Text, It return the text on ok origin, if Cancel button or Esc is Clicked, null.

3. confirm() - shows a message, confirm with "OK" or "Cancel". It return true for OK and false for Cancel/Esc.Cancel

*/

// Note: All these pause script execution and don't allow the visitor to interact with the rest of the page until the window has been dismissed


// alert('Hello');

// let age = prompt('Enter ypu age', 20);

// if(age != null) {
//     document.write(`Your Age is ${age}`)
// }
// else {
//     document.write('Age Filed was Blank');
// }



let response = confirm('Are you sure, you want to delete');

if (response) {
    document.write('Deleted');
}
else{
    document.write('Now Deleted');
}