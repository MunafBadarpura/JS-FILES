let s = "Munaf";
console.log(s);

//Methods
console.log(s.length);
console.log(s.charAt(0));  // s[0];

let a = "Munaf";
let b = "Badarpura";
let c = a.concat(b);
console.log(c);
console.log(a+b);

console.log("\n");

//slice
console.log("Slice : ");
console.log(c.slice(2));  //nafBadarpura
console.log(c.slice(2,5));//naf
console.log(c.slice(-5)); //rpura
console.log(c.slice(-5,-1));//rpur


//Trim
let d = "   hello  ";
console.log(d);
console.log(d.trim());

//Split
let e = "Munaf Amin Badarpura";
console.log(e.split());