let info = {
    firstName: 'Pesho', 
    lastName: 'Petrov', 
    age: 28,  
    isMale: true,
};
let infoJson = JSON.stringify(info);
console.log(infoJson); //string
console.log(infoJson.firstName); //undefined

let convertedInfo = JSON.parse(infoJson)
console.log(convertedInfo); //object
console.log(convertedInfo.firstName);