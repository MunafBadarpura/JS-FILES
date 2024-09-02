let myHeros = ["batman", "superman"];

let heroPower = {
    spiderman : "spidy",
    thor : "hammer"
}

// Object Prototype
Object.prototype.munaf = function() {
    console.log("munaf present");
}

console.log(myHeros.munaf());
console.log(heroPower.munaf());



// Array Prototype
Array.prototype.sayMunaf= function() {
    console.log("Say Munaf");
}

console.log(myHeros.sayMunaf());
// console.log(heroPower.sayMunaf());  //this is not allowed because this is obect



