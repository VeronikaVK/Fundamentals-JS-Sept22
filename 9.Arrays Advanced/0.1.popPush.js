let cars = ['bmv', 'mercedess', 'toyota', 'vw'];
console.log(cars);

//add element at the end of array
cars.push('audi');
console.log(cars);

//add multiple elements at the end of array
cars.push('trabant', 'lada');
console.log(cars);

//remove last car from array
cars.pop();
console.log(cars);

//remove and get the last element from the array
let lastCar = cars.pop();
console.log(cars);
console.log('removed car', lastCar);

// get new length after push
let currentCarCount = cars.push('honda')
console.log(cars);
console.log(currentCarCount);

//remove last element without pop
cars.length = cars.length - 1;
console.log(cars);