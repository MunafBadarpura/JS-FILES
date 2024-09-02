let arr = [1,2,3,4];

//Array Methods

// 1. arr.push
arr.push(6, 7);
console.log(arr);
console.log("\n");

// 2. arr.pop
arr.pop();
console.log(arr);
console.log("\n");

// 3. arr.unshift
arr.unshift(0);
console.log(arr);
console.log("\n");

// 4. arr.shift
arr.shift();
console.log(arr);
console.log("\n");

// 5. concat  -->For adding whole array
console.log("Concat");
let a = [1,2,3]
let b = [7,8,9];
// let c = a.concat(b);
console.log(a.concat(b));
console.log("\n");

// 5. join  --> convert to string with any char 
console.log("Join");
let j = [1,2,3,4,5]
// let s = j.join("");
console.log(j.join(""));

let q = j.join("*");
console.log(q);
console.log("\n");

// 6. reverse()
let rev = [1,2,3,4,5];
// let rev1 = rev.reverse();
console.log( rev.reverse());
console.log("\n");

// 7. indexOf
let id = [4,5,6,7,8,9];
console.log(id.indexOf(5));
console.log(id.indexOf(10));  // index not exist so return -1
console.log("\n");

// 8. slice    --> Can Not Modify Original Array
console.log("Slice");
let sl = [1,2,3,4,5,6];
console.log(sl.slice(2,5));
console.log("\n");

// 9. splice    --> Can Modify Original Array
let sp = [1,2,3,4,5,6];
sp.splice(2, 0 ,9); // 2nd index pe 0 elements udaake , 9 daaldo
// sp.splice(2,3)
console.log(sp);

let sp1 = [1,2,3,4,5,6];
sp1.splice(2, 1 ,9 ,10);  // 1 element udaado , isiliye 3 udd gaya , multiple values add kar skte hai jese[9,10]
console.log(sp1);


// 10. to string
let charArr = ['A','B','C','D','E'];
console.log(charArr);
console.log(charArr.toString() , typeof charArr);


// 11.Sorting
let Arr = [5,3,2,4,1];
Arr.sort();
console.log(Arr);

let Arr2 = [51,3,21,4,1];
Arr2.sort((a,b) => a-b);
console.log(Arr2);

let Arr3 = [51,3,21,4,1]; // Decending
Arr3.sort((a,b) => b-a);
console.log(Arr3);