let phoneBook ={
    ivaylo: '1232121213',
    pesho: '7899898897',
    gosho: '4566565654',
    stamat: '9858585589'

};
for(let name in phoneBook){
    console.log(name);
    console.log(`${name} -> ${phoneBook[name]}`);
}

//for in with arrays
let names = ['pesho', 'gosho', 'stamat']
for(let index in names){
    console.log(index);
}