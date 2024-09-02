//SPREAD

let a = [1,2,3,4];
let b = [5,6,7,8];

let c = [...a, ...b];  //spread operator
console.log(c);

//--------------------------------------------------------------------------------------------------------------
//REST

function fun(){
    let args = Array.from(arguments);
    let store = args.map((x) => x);
    console.log(store);
}

function fun2(...args){
    let store = args.map((x) => x);
    console.log(store);
}

fun2(1,2,3,4);
fun2(8,4,7,5,6,4,8);


//--------------------------------------------------------------------------------------------------------------
//DESTRUCTURING

let arr0 = [1,2,3,4,5,6,7];
let [A,B,C,D, ...rest] = arr0;

console.log(A,B,C,D,rest);


// let arr0 = [1,2,3,4,5,6,7];
// let [A, , , , ...rest] = arr0;

// console.log(A,rest);


let names = ["tony" , "thor", "suor", "xyz", "abx"];
let [winner, runner, ...others] = names;
console.log(winner);
console.log(runner);
console.log(others);
