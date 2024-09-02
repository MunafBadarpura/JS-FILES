let a = [1,2,3,"munaf",false];
console.log(a);
console.log("\n");

let b = new Array("Abc",a,1);   // printing array a with other elements
console.log(b);
console.log("\n");

let c = new Array(5);
c = [1,2,3,4,5];
console.log(c);
console.log("\n");


let d = [a,b,c];      //printing all array
console.log(d);
console.log("\n");


//changing full array
d[0] = [0,0,0,0];
console.log(d);