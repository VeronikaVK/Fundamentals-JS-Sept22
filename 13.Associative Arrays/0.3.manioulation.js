let phoneBook = {
    ivaylo: '1232121213',
    pesho: '7899898897',
    gosho: '4566565654',
    stamat: '9858585589'

};
if (phoneBook.hasOwnProperty('ivaylo')) {
    console.log(`Entry found: ${phoneBook['ivaylo']}`);
}
if(phoneBook['pesho']){
    console.log(`Entry found: ${phoneBook['pesho']}`);
}