function sum(){
    let sum = 0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}

console.log(sum(10,10,10));  


// function fun(){
//     console.log(arguments);;
// }

// fun(1,2,3,4,5,6,7,8,9);  //unlimited arguments


// function fun1(){
//     return arguments;
// }

// console.log(fun1(2,4,80));

