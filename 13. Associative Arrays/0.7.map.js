let phoneBookMap = new Map();

phoneBookMap.set('pesho', '45665656654');
phoneBookMap.set('gosho', '1233232321');
phoneBookMap.set('mariyka', '7899898987');

console.log(phoneBookMap);

console.log(phoneBookMap.get('pesho'));

console.log(phoneBookMap.size);

if (phoneBookMap.has('gosho')) {
    console.log('Gosho is blabla');
}

phoneBookMap.delete('gosho');
console.log(phoneBookMap);



//iterate keys in map
for (const key of phoneBookMap.keys()) {
    console.log(key);
}

//iterate value in map
for (const value of phoneBookMap.values()) {
    console.log(value);
}

//iterate entries in map
for (const [name, phone] of phoneBookMap.entries()) {
    console.log(`${name} -> ${phone}`);
}

//iterate map same as above
for (const kvp of phoneBookMap) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
}


//iterate map with foreach
phoneBookMap.forEach((value, key) =>{
    console.log(`${key} -> ${value}`);
})