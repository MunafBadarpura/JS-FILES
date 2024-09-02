const sum = (x,y) => x+y;
const mul = (x,y) => x*y;
const PI = 3.14;

let obj = {
    sum : sum,
    mul : mul,
    PI : PI,
}
module.exports = obj // Export to another file

// OR
// module.exports = {
//     sum : sum,
//     mul : mul,
//     PI : PI,
// }

// OR
// module.exports.sum = (x,y) => x+y;