let emp = {
    id: 110,
    name: "munaf",
    age: 17
};

//Methods
// 1. Keys
let a = Object.keys(emp);
console.log(a);

// 2. Values
let b = Object.values(emp);
console.log(b);

// 3. Entries
let c = Object.entries(emp);
console.log(c);

// 3. Freeze       --> for freezing values , we cant update values and cant add member
Object.freeze(emp);
emp.address = "Basu";   //--> we cant add member aafter freeze
emp.id = 999;           //--> we cant change aafter freeze
delete emp.id;          //--> we cant delete aafter freeze
console.log("id ",emp.id);

// 3. seal       -->  we  update/change values but cant add member
emp.id = 999; 

// 3. assign
let obj = Object.assign({}, emp);
console.log("New Object",obj);

let obj1 = Object.assign({x: 20}, emp);
console.log("New Object 2",obj1);