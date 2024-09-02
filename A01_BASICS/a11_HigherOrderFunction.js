//Higher Order Function  // First - Class Function
function numCube(numPower , n){
    return numPower(n) * n;
}

const numPower = (n) =>{
    return n**2;  // n power 2
}

console.log(numCube(numPower, 3));


//------------------------------------------------------------------------------------
function sayHello(){
    return () => {
        console.log("Hello EveryOne");
    }
}

let guessFun = sayHello();  //Function stored in guessFun
console.log(typeof guessFun);
guessFun();


//------------------------------------------------------------------------------------
//Closures
const higherOrder = (n) =>{     // this function can access only n
    const funOne = (m) =>{      // this function can access m,n
        const funTwo = (p) =>{  // this function can access m,n,p
            return m+n+p;
        }
        return funTwo;
    }
    return funOne;
}

console.log(higherOrder(5)(10)(15));


//------------------------------------------------------------------------------------
const sumArray = (arr) =>{
    let total = 0;
    arr.forEach(function(element){
        total+=element;
    });
    return total;
}

// const sumArray = (arr) =>{
//     let total = 0;
//     for(let i=0;i<arr.length;i++){
//         total+=arr[i];
//     }
//     return total;
// }

let arr = [1,2,3,4,5];
console.log(sumArray(arr));


//------------------------------------------------------------------------------------
// Asyncronous Proccecing

function hello(){
    console.log("Hello Everyone" , Math.random() );
}

const hello2 = () => console.log("Hello Everyone" , Math.random() );

setInterval(hello2 ,1000) // print after every second
//setTimeout(hello , 2000) // print only one time after 2 seconds 

