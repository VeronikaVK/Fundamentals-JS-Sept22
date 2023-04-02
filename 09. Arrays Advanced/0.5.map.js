let numbers = [3, 4, 1, 6, 10];
console.log(numbers);

let doubleNumbers = numbers.map(x => x * 2) // вземи всеки един елемент х и го умножи * 2
console.log(doubleNumbers);

// solution without map
let doubleNumbers2 = [];
for(const num of numbers){
    doubleNumbers2.push(num * 2);
}
console.log(doubleNumbers2);
