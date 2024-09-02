function createPromise(){
    return new Promise(function exec(resolve , reject) {
        setTimeout(function f() {
            console.log("setTimeout Done!");
            resolve("Resolve Done")
            // reject("Resolve Done")
        })
    })
}

console.log("start");

let x = createPromise();

console.log("Got A New Promice");

x.then(function f(value) {
    console.log("Promice Done!", value);
}).catch(function f(value) {
    console.log("Handled!", value);
}).finally(function f(){
    console.log("finally");
})

console.log("end");