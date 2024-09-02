class Product{
    name;
    price;
    #rating; // Now Rating Is Private 

    constructor(n, p, r){
        this.name = n;
        this.price = p;
        this.#rating = r;
    }

    display(){
        console.log("THIS =>",this);
    }

    getRating(){
        return this.#rating;
    }
}


let p = new Product("iPhone", 500000, 7.2);
console.log(p);
p.display();

console.log(p.rating); // undefined

console.log(p.getRating());

p.rating = 10;
console.log(p.rating);
console.log(p.getRating());




