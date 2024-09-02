let pattern = "pw";

let regExOne = new RegExp(pattern);

let flag = "gi";
let regExTwo = new RegExp(pattern, flag);

let regExThree = /pw/gi;

const str = "pw means phics wallah , Pw is big education , i learn with PW skills";

let result = regExThree.test(str);
console.log(result);

let result2 = str.match(regExThree);
console.log(result2);

let result3 = str.replace(regExThree, "pp--ww");
console.log(result3);