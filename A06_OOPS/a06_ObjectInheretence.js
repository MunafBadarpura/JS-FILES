let obj1 = {
    name : "Munaf",
    age : 18,
}

let obj2 = {
    class : 12,
}

let obj3 = {
    surname : "badarpura",
    // (1) Inheretate
    __proto__ : obj2, // we can access obj2 memeber in obj3
}

console.log(obj3.class); //we can access obj2 memeber in obj3


// (2) Second Method : Outside inheretence
obj2.__proto__ = obj1; //obj2 access all obj1 properties
console.log(obj2.name);


// (3) Third Method : Modern Method

Object.setPrototypeOf(obj3, obj1) //obj3 ke andar obj1 ki properties daaldo
console.log(obj3.age);


// (4)  Method : 

class ob1 {
    fun() {
        console.log("Hello");
    }
}
class ob2 extends ob1{
    
}

let a = new ob2;
a.fun();

// (5)  Super KeyWord : 

class parent {
    constructor(name){
        this.name = name
    }
}
class child extends parent{
    constructor(name){
        super(name)  // When w use constructer in child class we also use without parameter likr this => super()
        this.name = name;
    }
}

let m = new child("munaf");