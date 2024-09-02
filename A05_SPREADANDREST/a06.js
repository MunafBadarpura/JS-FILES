let a = [1,2,3,5,5];
let b = a;
let c = [...a];

console.log(b);
console.log(c);

let total=0;
function hello(...s){
    for(let i=0;i<s.length;i++){
        total+=s[i];
    }
}
hello(12,1);
console.log(total)


let p = {name:"hello", age:20};
let {age}  = p;
console.log(age);