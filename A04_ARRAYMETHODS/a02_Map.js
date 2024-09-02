//Map
let arr = [1,2,3,4,5];

let double = arr.map(ele => ele*2); // created new array with name of 'double' with same size

console.log(double);

//For Object
let obj = [
    {
        name : "Munaf",
        marks : 80,
    },
    {
        name : "Hasan",
        marks : 71,
    },
    {
        name : "Sahad",
        marks : 60,
    },
];
 
let gpa = obj.map(ele => ele.marks/10);  // created new Object with name of 'gpa'.
console.log("GPA : " ,gpa);

