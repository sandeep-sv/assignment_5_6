class Car {
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }

    honk() {
        console.log("Tuut tuut");
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Color: ${this.color}`);
        console.log(`Price: $${this.price}`);
    }
}

function race(cars) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    for (let i = 1; i <= 7; i++) {
        console.log(`Turn ${i}:`);
        for (let j = 0; j < cars.length; j++) {
            if (cars[j].gas > 0) {
                if (cars[j].year === currentYear) {
                    cars[j].gas -= 5;
                } else {
                    const diff = currentYear - cars[j].year;
                    cars[j].gas -= 5 + diff;
                }
                console.log(`${cars[j].brand} - Gas remaining: ${cars[j].gas} liters`);
            } else {
                console.log(`${cars[j].brand} - Gas is empty`);
            }
        }
        console.log();
    }
}


const car1 = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
const car2 = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
const car3 = new Car("BMW", "X5", 2022, "Green", 60000, 65);
const car4 = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
const car5 = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
const car6 = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);

const cars = [car1, car2, car3, car4, car5, car6];
for (let i = 0; i < cars.length; i++) {
    cars[i].honk();
    console.log();
}
race(cars);
