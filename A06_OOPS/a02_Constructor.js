class Product{
    name;
    price;
    rating;

    constructor(n, p, r){
        this.name = n;
        this.price = p;
        this.rating = r;
    }

    display(){
        console.log("THIS =>",this);
        console.log("Hello");
    }

    static fun(){  //This Static Function Refers to Class ,Not Object
        console.log("Static Called");
    }
}


let p = new Product("iPhone", 500000, 7.2);
console.log(p);
p.display();

// p.fun();Static Function Not Refers to Object
Product.fun();