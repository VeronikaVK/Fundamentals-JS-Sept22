function palindromeIntegers(numberArray){
    let numberArrayLength = numberArray.length;
    for(let index = 0; index < numberArrayLength; index++){
        let numAsString = numberArray[index].toString();
        let reversedString = '';

        for(let j = numAsString.length - 1; j >= 0; j--){
            reversedString += numAsString[j];
        }
        if(numAsString === reversedString){
            console.log(true);
        }else{
            console.log(false);
        }
    }
}
palindromeIntegers([123,323,421,121])