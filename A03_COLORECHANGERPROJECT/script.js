let btn = document.getElementById("btn");

//Random Color Function
randomColor = () => {
    let val = "0123456789ABCDEF";
    let hexValue = '#';

    for(let i=0;i<=5;i++){
        hexValue = hexValue + val[Math.floor(Math.random()*16)];
    }
    return hexValue;
}

// function changeColor(){
//     document.body.style.backgroundColor = randomColor();
//     // document.getElementById("btn").style.backgroundColor = randomColor();
//     // btn.style.backgroundColor = randomColor();
// }

//Event Listner
btn.addEventListener("click", () => {
    document.body.style.backgroundColor = randomColor();
});