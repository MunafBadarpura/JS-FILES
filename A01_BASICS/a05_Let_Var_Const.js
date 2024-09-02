/**
 * (1). var
 *  a.=> It is used to define variable
 *  b.=>It has function scope BUT no block scope
 *  c.=>It is Hoisted
 */


//(1) VAR

// A. Function Impimentation
function fun1(){
    var age = 17;
}

// B. console.log(age); <-- we Cant Access

{
    var run = 20;
}
//console.log(run); //<-- we Can Access

// C. Hoisted Impimentation
console.log(a);
var a = 10; // this is after consol


//---------------------------------------------------------------------------------------------------

/**
 * (2). let
 *  a.=> It is used to define variable
 *  b.=>It has function scope and also block scope
 *  c.=>Is is Not Support Hoisting
 */

//---------------------------------------------------------------------------------------------------

/**
 * (3). const
 *  a.=> const variables are final we cant change the value 
 *  b.=>It has function scope and also block scope (same as let)
 *  c.=>Is is Not Support Hoisting (same as let)
 */

const cnst = 10;
// cnst = 20;  <-- we cant change const value


