function sumDigits(number){
    let numberAsString = number.toString();
    let sumOfDigits = 0;
    let numberOfDigits = numberAsString.length; //за да не минава през всеки символ винаги във  фор цикъла
    for(let i = 0; i < numberOfDigits; i++){
        
        let currentDigit = Number(numberAsString[i]);
        sumOfDigits += currentDigit;
        
    }
    console.log(sumOfDigits);
    
}
sumDigits(245678)