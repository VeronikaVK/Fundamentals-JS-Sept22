let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?'

let startsWithLorem = text.startsWith('Lorem');
let endsWithTempor = text.endsWith('?');

console.log(startsWithLorem);
console.log(endsWithTempor);

//Pad
let bits = ['1', '11', '100000', '1000111'];

for (const bit of bits) {
    console.log(bit.padStart(8, '0'));
}