let arr = [1,2,3,4,5];

// function fun(ele){
//     console.log(ele);
// }

// arr.forEach(fun);
console.log("\n");
//OR

arr.forEach(function(ele){
    console.log(ele);
});

//For Object  -----------------------------------------------------------------------------

let obj = [
    {
        name : "Munaf",
        marks : 80,
    },
    {
        name : "Hasan",
        marks : 71,
    },
    {
        name : "Sahad",
        marks : 60,
    },
];

obj.forEach(function(ele){
    console.log(ele);
})

obj.forEach(function(ele){
    console.log(ele.name);
})

// obj.forEach((ele) => {
//     console.log(ele.marks);
// })

// With short form
let a = obj.forEach(ele => console.log(ele.marks));

