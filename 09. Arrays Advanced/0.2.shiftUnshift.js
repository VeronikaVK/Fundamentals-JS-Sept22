let cars = ['bmv', 'mercedess', 'toyota', 'vw'];
console.log(cars);

//add element at the beginning of array
cars.unshift('lada');
console.log(cars);

//remove first car from array
cars.shift();
console.log(cars);


// get new length after shift
let firstCar = cars.shift()
console.log(cars);
console.log(firstCar);