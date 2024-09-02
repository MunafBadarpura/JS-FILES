let input = document.querySelector("input");

// when key press
input.addEventListener("keydown", function(event) {
    console.log("Key Pressed");
    console.log(event.key);
    console.log(event.code);
    // console.log(event);
})

// when key up
// input.addEventListener("keyup", function(event) {
//     console.log("Key up");
//     console.log(event);
// })


//FORM 
let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form Submitted");
    console.log(event);
})


