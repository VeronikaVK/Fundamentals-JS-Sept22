class Dog {
    constructor(dogname, dogbreed) {
        this.name = dogname;
        this.breed = dogbreed
    }
    bark() {
        console.log(`${this.name}: wof wof`);
    }
}

let firstDog = new Dog('Sharo', 'Huskey')
let secondDog = new Dog('Balkan', 'shepard')
firstDog.bark();
secondDog.bark()

console.log(firstDog);
console.log(secondDog);
console.log(typeof firstDog); 
