let numbers = [2, 4, 1, 10, 3];

let evenNumbers = numbers.filter(num => num % 2 == 0) //за всеки num(число от масива) провери дали се дели на 2
let oddNumbers = numbers.filter(x => x % 2 !== 0);
console.log(numbers);
console.log(evenNumbers);
console.log(oddNumbers);

// filtering with strings
let names = ['ivo', 'pesho', 'ani']
let shortName = names.filter(x => x.length <= 3);
console.log(shortName);

//Take numbers on even possitions
let evenPositionNumbers = numbers.filter((x, i) => i % 2 === 0);
console.log('even possitions:', evenPositionNumbers);