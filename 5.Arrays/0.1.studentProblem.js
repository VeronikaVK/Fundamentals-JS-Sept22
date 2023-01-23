let students = ['Pesho', 'Gosho', 'Stamat', 'Maria'] // We are creating Arrays using literal []

// може да се променя стойността в масив
students[3] = 'Mariya' 
console.log(students[3]);

//  дължината на масива
console.log(students.length); 

// последният елемент в масив. Дължината - 1 даради броенето от 0
console.log(students[students.length -1]); 

// add element at the end of the array
students[students.length] = 'Vladi'; // not clean code; not the best way
console.log(students);

//add at the end using push metod AKA the clean way
students.push('Sam');
console.log(students);

//select element on invalid position
students[23] = 'Yavor';
console.log(students); //между 7-23 оставя празни места, така че ако изберем console.log(students[8]) връща undefined

//check if there is an element inside an array
console.log(students.includes('Pesho'));

// use toDtring method on array
console.log(students.toString());

// Join element inside array into string
console.log(students.join('; '));