let arr = [5,10,15];

arr.forEach(function(element, index, arr){
    console.log(element, index, arr);
});

// element than index than array (Koi Bhi Naam Rakh Sakte Hai)

console.log("\n","Arrow :");

arr.forEach((element, index, arr) =>{
    console.log(element, index, arr);
});

console.log("\n","Map :");
arr.map(function(element, index, arr){
    console.log(element, index, arr);
});


//------------------------------------------------------------------------------------
//Map

let cube = [1,2,3,4];
let cube_arr = cube.map(ele => ele**3);
console.log(cube_arr);


//------------------------------------------------------------------------------------
let heros = ["Rahul" , "Akshay" , "Salamn"];
heros.forEach((ele) => {console.log(ele.toUpperCase())});


//------------------------------------------------------------------------------------
//Filter

let heros2 = ["RahulRaj" , "AkshayRaj" , "Salamn"];
const herosWithRaj = heros2.filter((ele) => {
    return ele.endsWith("Raj");
})

console.log(herosWithRaj); 

heros2.forEach((ele) =>{
    console.log(ele.endsWith("Raj"));
})

//------------------------------------------------------------------------------------
//Reduce

const cartBill = [20,30,50];
const cartBillSum = cartBill.reduce((pre, curr) => pre+curr ,0);  // 0 is the value of pre element 
console.log(cartBillSum);


//------------------------------------------------------------------------------------
//Every

const gameScore = [80,150,120,40,"Man"];
const gameScoreCheck = gameScore.every((ele) => typeof ele === 'number')
console.log(gameScoreCheck);


//------------------------------------------------------------------------------------
//Find
console.log("Find");
const above50 = gameScore.find((ele) => ele>100);
console.log(above50);

const aboveIdx50 = gameScore.findIndex((ele) => ele>100);
console.log(aboveIdx50);


//------------------------------------------------------------------------------------
//Sort 

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const array1 = [1, 21000, 4, 2100, 100000];  // numbers are convert into string than compare
array1.sort();
console.log(array1);