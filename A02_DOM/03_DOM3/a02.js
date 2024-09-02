let btns = document.querySelectorAll("button");
for(btn of btns){
    btn.onclick = hello;
    btn.onmouseenter = enter;
}

function hello(){
    alert("Hello");
}
function enter(){
    console.log("You enterd");
}


// // => EVENT LISTNER
// Element.addEventListner("propertie", function)

// // this keyword
let h3 = document.querySelector("h3")
h3.addEventListener("mouseenter", function f() {
    this.style.color = "red";
    this.style.fontSize = "30px";
})

