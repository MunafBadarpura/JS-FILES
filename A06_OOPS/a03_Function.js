function Product(n ,p, r){
    this.name = n;
    this.price = p;
    this.rating = r;
}

let a = new Product("iMAC", 1000000, 8.9);
console.log(a);



//We can NOT use this keyword in arrow function
// let Product2 = (n ,p, r) => {  // 
//     this.name = n;
//     this.price = p;
//     this.rating = r;
// }

// let b = new Product("iMAC", 1000000, 8.9);
// console.log(b);
