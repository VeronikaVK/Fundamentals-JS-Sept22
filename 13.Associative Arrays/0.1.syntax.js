let nameFemale = 'maria maria';

let phoneBook = {
    ivaylo: '0885454546',
    'peter ivanov': '5665454564',
    'stamat stamatov': '3542121123',
    [nameFemale]: '7895645789' //dynamic property name
};
let propertyName = 'stamat stamatov'

console.log(phoneBook.ivaylo);
console.log(phoneBook['peter ivanov']);
console.log(phoneBook[propertyName]);
console.log(phoneBook[nameFemale]);