//Splice mutates the original array
let cars = ['bmv', 'mercedess', 'toyota', 'vw'];
console.log(cars);

//Remove single element at the middel
cars.splice(2, 1); //starting from index 2 remove 1 element 
console.log(cars);

// remove 2 element at the middle 
cars = ['bmv', 'mercedess', 'toyota', 'vw'];
let middleCars = cars.splice(1, 2);
console.log('Origin array:', cars);
console.log('Middle Cars:', middleCars);

// Add element in the middle
cars = ['bmv', 'mercedess', 'toyota', 'vw'];
cars.splice(1, 0, 'lada', 'trabant'); // start from index 1, delete 0 elements, add 'name' elements
console.log(cars);

//combine add and removed
cars.splice(1, 2, 'honda') // start from index 1, delete 2 elements, add 'name' elements
console.log(cars);