let jsonData = '{"fact":"Unlike humans, cats cannot detect sweetness which likely explains why they are not drawn to it at all.","length":102, "age":25}'
// console.log(jsonData);

// console.log(jsonData.fact);
// console.log(jsonData.length);

let validJson = JSON.parse(jsonData);
console.log(validJson);
console.log(validJson.age);

// convert js object to json

let student = {
    name : "munaf",
    age : 17,
};

let obgToJson = JSON.stringify(student);  // To Covert JsObject Into JSON  [JSON.stringify]

console.log(obgToJson);