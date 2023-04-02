let cars = ['bmv', 'mercedess', 'toyota', 'vw'];

// Take firs two cars
let firstCars = cars.slice(0, 2);
console.log(cars); // original array has not modified
console.log('First Cars:', firstCars);

//Take elements from specific index to the end of the array
let lastCars = cars.slice(2); // from 2 to the end
console.log(cars);
console.log('Last cars:', lastCars);

//Make a Copy
let carsCopy = cars.slice();
console.log(cars);
console.log('Cars Copy:', carsCopy);

//Take last element with negative index
let lastCar = cars.slice(-1);
console.log(lastCar);

let lastTwoCars = cars.slice(-2);
console.log(lastTwoCars);