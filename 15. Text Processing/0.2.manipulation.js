
let text = 'Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

// String searching with index of
let dolorIndex = text.indexOf('dolor'); // index of d
console.log(dolorIndex);

//find second dolor
let secondDolorIndex = text.indexOf('dolor', dolorIndex + 1);
console.log(secondDolorIndex);

//serch of word that is missing - returns -1
let missingWordIndex = text.indexOf('ivo');
console.log(missingWordIndex);

//get all index
let index = text.indexOf('dolor');
while(index >= 0){
    
    console.log('Dolor found on ' + index + ' position');
    index = text.indexOf('dolor', index + 1);
}

//lastIndexOf
let dolorLastIndex = text.lastIndexOf('dolor');
console.log(dolorIndex); //count the index from last to first