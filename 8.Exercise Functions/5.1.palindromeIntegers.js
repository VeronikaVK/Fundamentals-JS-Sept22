function palindromeIntegers(numberArray){
    let numberArrayLength = numberArray.length;
    for(let index = 0; index < numberArrayLength; index++){
        let numAsString = numberArray[index].toString();

        //join - array to string
        //split - string to array
        //spli обръща стринга в масив || reverse обръща масива огледално, отзад напред || join обръща масива отново в стринг 
        let reversedString = numAsString.split('').reverse().join('');
        if(numAsString === reversedString){
            console.log(true);
        }else{
            console.log(false);
        }
    }
}
palindromeIntegers([123,323,421,121])