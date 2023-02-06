let numbers = [2, 4, 1, 6, 2];
let cars = ['bmv', 'mercedess', 'toyota', 'vw', 'audi'];

// using default sort
console.log('----using default sort----');
let sortedNumbers = numbers.sort();
cars.sort() // can be done without variable let as it mutates original array
console.log(numbers); // mutates original array
console.log(sortedNumbers);
console.log(cars); // mutates original array

// Default sort limitation
console.log('----Default sort limitation----');
numbers = [2, 4, 1, 6, 2, 100];
cars = ['bmv', 'mercedess', 'toyota', 'VM', 'audi'];
numbers.sort();
cars.sort();
console.log(numbers); // 100 идва след 1 и преди 2, защото sort подрежда по ASCII кодове
console.log(cars);


//Sort numbers
console.log('----Sort numbers----');
numbers = [2, 4, 1, 6, 2, 100];
// numbers.sort((a,b) =>{
//     if(a < b){ // a - b = negative
//         return -1;
//     } else if(a > b){ // a - b = positive
//         return 1;
//     } else{ // a - b = 0
//         return 0;
//     }
// })
numbers.sort((a, b) => a - b);
console.log(numbers);

//Sort Strings
console.log('----Sort Strings----');
cars = ['bmv', 'mercedess', 'toyota', 'VM', 'audi'];
cars.sort((a, b) => a.localeCompare(b))
console.log(cars);

//Descending 
console.log('----Descending----');
numbers = [2, 4, 1, 6, 2, 100];
cars = ['bmv', 'mercedess', 'toyota', 'VM', 'audi'];
numbers.sort((a, b) => b - a);
cars.sort((a, b) => b.localeCompare(a))
console.log(numbers);
console.log(cars);

