let info = {
    firstName: 'Pesho', 
    lastName: 'Petrov', 
    age: 28,  
    isMale: true,
}
// for of
for (const value of Object.values(info)) {
    console.log(value);
}

for (const key of Object.keys(info)) {
    console.log(`${key} - ${info[key]}`);
    
}