console.log("start");

setTimeout(function () {
    console.log("Timer 1");
},900);
setTimeout(function () {
    console.log("Timer 2");
},1100);
setTimeout(function () {
    console.log("Timer 3");
},900);

console.log("end");

for(let i=0;i<1000000;i++);
