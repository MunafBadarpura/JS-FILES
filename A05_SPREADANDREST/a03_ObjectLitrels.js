const data = {
    email : "munaf@gmail.com",
    pass : "abcd",
};

const dataCopy = {...data , id:123};  // Copying Data And Added id Member

console.log(dataCopy);


let arr = [1,2,3,4,6];
let obj = {...arr};   // Convert to Object
console.log(obj);