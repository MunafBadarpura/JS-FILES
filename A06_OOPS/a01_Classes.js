// Class 
class Product{
    // Prperties -> Variables -> Data Memebers
    name;
    price;
    rating;

    // Behaviur -> Funcrion -> Member Function
    display(){
        console.log("Hello");
    }
}

// Object
let p = new Product();
p.display();
console.log(p);


// Skip This // This Is For Practice

// class Car{
//     #speed = 300;
//     fuel;
//     name;

//     constructor( fuel, name) {
//         // this.#speed = speed;
//         this.fuel = fuel;
//         this.name = name;
//     }

//     get speed(){
//         console.log(this.#speed);
//     }
// }

// let toyota = new Car(80, "Toyota"); 
// toyota.speed;