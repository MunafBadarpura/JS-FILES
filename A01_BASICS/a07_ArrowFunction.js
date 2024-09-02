//  => Basic Structure : 
//    const "functionName" = ("parameter") => return statement


// 1. One Parameter, and single return statement
const squre = (x) => x*x;

// 2. Multiple parameters, and single return statement
const sumOfTwoNumbers = (x,y) => x+y;

// 3. Multiple statement in function
const sumOfSqure = (x,y) => {
    let xSqur = x*x;
    let ySqr = y*y;
    return xSqur + ySqr;
}  // If You Use Braces then You Want to Compulsory Write return Statement

// 4. Returning an Object
const sumAndDiffrence = (x,y) => ({sum: x+y, diffrence: x-y});

// CALLING FUNCTION -----------------------------------------------------------------------

console.log(4);

console.log(sumOfTwoNumbers(10,10));

console.log(sumOfSqure(5,4));

console.log(sumAndDiffrence(5,3));



// return object from arrow function

let obj1 = () => ( {name:"munaf", age:17} );
console.log(obj1());
