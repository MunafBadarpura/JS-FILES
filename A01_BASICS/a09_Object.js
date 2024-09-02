let obj = {name: "munaf", age: 17, marks: 89};
console.log(obj);

let newObj = new Object();  // New Object Method
newObj.name = "Hello";
newObj.id = 111;

console.log("New Object : ",newObj);

//----------------------------------------------------------------------------------------------------------

function emp(i, n, s){
    this.id = i;
    this.name = n;
    this.salary = s;
}

let a = new emp(101, "nama", 170000);
console.log(a);

//Fatching value
console.log(a.name);
console.log(a["name"]);

//Delete
delete a.id;
console.log(a);
