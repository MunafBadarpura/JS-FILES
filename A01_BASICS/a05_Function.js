function greet(){
    console.log("Hello"); 
    console.log("Bro"); 
}
greet();

//--------------------------------------------------------------------------------------------------

function sqr(x){  // x -> Parameter
    return x*x;   //Return statement , in JS when we dont return anything it return bydefault "unefined"
}
let a = sqr(8);  // 8 -> Argument
console.log(a);

//--------------------------------------------------------------------------------------------------

function ss(x){

}
let v = ss();
console.log(v); //  in JS when we dont return anything it return bydefault "unefined"

//--------------------------------------------------------------------------------------------------

function display(message = "iAmHappy"){
    console.log(message);
}
display("iamNotHappy");  // it will over-write a patamter
display();


function ac(a=20,b=10){
    console.log(a+b);
}
ac(5);
//--------------------------------------------------------------------------------------------------

function arraySum([num1,num2]){
    return num1 + num2;
}

let arr = [30,20];
let res = arraySum(arr);
console.log(res);


//--------------------------------------------------------------------------------------------------

function fun3(a,b=30){
    console.log(a+b);
}
fun3(20);