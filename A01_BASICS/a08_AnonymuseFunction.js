let x = function(){
    console.log("Hello");
}

x();

//-----------------------------------------------------------------------------------------------

let y = function(a,b){
    return a+b;
}

console.log(y(10,20));

//-----------------------------------------------------------------------------------------------
//Invoke Function --> for one time and immediatly use, we cant acces after that 

(function fun(){
    console.log("Onetime");
})();

(function fun1(x){
    console.log(x*x);
})(5);