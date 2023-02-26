// declare associative array
let phoneBook = {
    ivaylo: '1232121213',
    pesho: '7899898897',
    gosho: '4566565654',
    stamat: '9858585589'

};
// convert associative array to narmal array
let phoneBookEntry = Object.entries(phoneBook);

//sort the array
//phoneBookEntry.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

phoneBookEntry.sort(([keyA, valueA], [keyB, valueB]) => keyA[0].localeCompare(keyB[0])); //can delete valueA and valueB

//optimal: convert back to asociative array
let sortetPhoneBook = Object.fromEntries(phoneBookEntry)
console.log(sortetPhoneBook);