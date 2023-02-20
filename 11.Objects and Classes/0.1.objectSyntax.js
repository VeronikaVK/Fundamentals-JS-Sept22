/*let personalInformation = [
    'Ivan',
    'Petrov',
    28,
    'Sofia',
    '12.12.2000',
    true,
    'Brown',
    'Dylga'
]
console.log(personalInformation[0] + ' ' + personalInformation[1] + 'Eye color' + personalInformation[6]);*/

let personalInformation = {
    firstName: 'Pesho', 
    lastName: 'Petrov', 
    age: 28,  
    isMale: true,
}
console.log(personalInformation.firstName);
console.log(`Hello, my name is ${personalInformation.firstName} ${personalInformation.lastName}`)
if(personalInformation.isMale){
    console.log('Go get a beer');
}

//Dynamic assign property
personalInformation.weigth = 80;
console.log(personalInformation);

//delete property
delete personalInformation.weigth
console.log(personalInformation);

//using bracket syntax
console.log(personalInformation['firstName']);
console.log(personalInformation.firstName); //dot syntax

//access property variable
let propertyName = 'firstName';
console.log(personalInformation[propertyName]);

//using different name for property name
let carInfo = {
    'car-model': 'toyota',
}
console.log(carInfo['car-model']);