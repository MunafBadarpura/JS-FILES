//Changing anchor tag colours
let links = document.querySelectorAll("p a");
for(link of links){
    link.style.color = "red";
}

//Changing anchor tag colours
let links2 = document.querySelectorAll(".pubInfo a");
for(let i=0; i<links2.length; i++){
    links2[i].style.color = "yellow"
}


// Class List Properties
// SELECTOR.CLASSLIST.PROPERTIES <-- SYNTAX

// 1. classList // To List Classes Name
// 2. classList.add("CLASS NAME") // To Add A New Class
// 3. classList.remove("CLASS NAME") // To Remove A Class
// 4. classList.contains("CLASS NAME") // To Check class exist ot not(true,false)
// 5. classList.toggle("CLASS NAME") // To Toggle between Add and Remove


//Example to color change throw adding a changing color class
let head = document.querySelector("h1");
head.classList.add("green");


// NAVIGATION PROPERTIE
// 1. parantElement
// 2. children
// 3. previoseElementSibling / nextElementSibling
// let h4 = document.querySelector("h4");
// console.log(h4.parentElement);

//Example
let pa = document.getElementById("para12");
pa.previousElementSibling.style.color = "red";


// ADDING ELEMENT
// 1. appendChild(element)
// 2. append(element)
// 3. prepend(element)
// 4. insertAdjesent(where, element)

let newp = document.createElement("p");
newp.innerText = "I am a new ";
let body = document.querySelector("body");
body.appendChild(newp);

// Adding Extra Content
newp.append(" Exta text");
newp.prepend(" Prepend : ");

//Insert Adjesent
let p = document.querySelector("p");
let btn = document.createElement("button");
btn.innerText = "Button";

// p.insertAdjacentElement("beforebegin", btn);
// p.insertAdjacentElement("afterbegin", btn);
// p.insertAdjacentElement("beforeend", btn);
// p.insertAdjacentElement("afterend", btn);



//REMOVE
// 1. removeChild(element)
// 2. remove(element)

// p.remove();


///////////////////////////////////////

