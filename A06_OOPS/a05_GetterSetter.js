class Product{
    name;
    price;
    #rating; // Now Rating Is Private 

    constructor(n, p, r){
        this.name = n;
        this.price = p;
        this.#rating = r;
    }

    setRating(r){
        if(r<0) return;
        this.#rating = r;
    }
    getRating(){
        console.log(this.#rating); 
    }

    //Inbuilt Method
    set settingRating(r){
        if(r<0) return;
        this.#rating = r;
    }
    get gettingRating(){
        console.log(this.#rating);
    }
}


let p = new Product("iPhone", 500000, 7.2);
// p.setRating(7.2);
// p.getRating();

p.settingRating = 7.2;
p.gettingRating;