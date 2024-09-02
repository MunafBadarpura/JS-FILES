let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let div = document.querySelector("div");


btn.addEventListener("click", () => {
    div.style.backgroundColor = randomColor();
    h1.innerText = randomColor();
});

function randomColor(){
    let r = Math.floor(Math.random()*255) + 1;
    let g = Math.floor(Math.random()*255) + 1;
    let b = Math.floor(Math.random()*255) + 1;
    
    let color = `rgb(${r}, ${g}, ${b})`
    return color;
}