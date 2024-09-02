//Higher Order Function  // First - Class Function

function operation(operatorFun, a, b){
    return operatorFun(a, b);
}

function add(a, b){
    return a+b;
}

let result = operation(add, 5, 10);
console.log(result);

//------------------------------------------------------------------------------------

function fun(){
    return function() {
        console.log("Hello");
    }
}

let greet = fun();
console.log(typeof greet);
greet();