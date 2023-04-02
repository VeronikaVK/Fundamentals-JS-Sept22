let phoneBook = {
    ivaylo: '1232121213',
    pesho: '7899898897',
    gosho: '4566565654',
    stamat: '9858585589'

};
let phoneBookEntry = Object.entries(phoneBook);
 for(const kvp of phoneBookEntry){
    console.log(kvp);

    // let [name, phone] = kvp
    let name = kvp[0];
    let phone = kvp[1];
    console.log(`${name} -> ${phone}`);
 }

 // shorter way
 for(let [name, phone] of Object.entries(phoneBook)){

    console.log(`${name} -> ${phone}`);
 }

