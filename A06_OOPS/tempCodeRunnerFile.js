class Car{
    speed;
    fuel;
    name;

    carFunction(speed, fuel, name) {
        this.speed = speed;
        this.fuel = fuel;
        this.name = name;
    }

    carfun(){
        console.log("Hello");
    }

    // constructor(speed, fuel, name) {
    //     this.speed = speed;
    //     this.fuel = fuel;
    //     this.name = name;
    // }
}

// let toyota = new Car(150, 80, "Toyota");
let toyota = new Car;
// Car.carFunction(150, 80, "Toyota");
Car.carfun;
// console.log(toyota.speed);