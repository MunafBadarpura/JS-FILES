let age = 15;
if(age>=18) console.log("You can vote");
else console.log("You Cant");


//If-Else
let signal = "green";
if(signal=="red") console.log("red");
else if(signal=="yello") console.log("yello");
else console.log("green");

//Switch Statement
let user = "admin"

switch (user){
    case "admin":
        console.log("admin");
        break
    
    case "student":
        console.log("student");
        break;

    default:
        console.log("this is default");
}


//Loops
for(let i=0;i<=5;i++){
    console.log(i);
}

console.log("\n");


let i = 0;
while(i<=5){
    console.log(i);
    i++;
}

console.log("\n");

let j = 2;
do{
    console.log(j);
} while(j>3);

//Ternary Condition   ?true : false
isloggedin = true;
isloggedin ? console.log("HomePage") : console.log("LoginPage");

