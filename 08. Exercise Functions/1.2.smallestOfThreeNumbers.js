function smallestOfThreeNumbers(firstNumber, secondNumber, lastNumber){
    let resultNumber = firstNumber;
    if(firstNumber >= secondNumber){
        resultNumber = secondNumber;
    }
    if(resultNumber > lastNumber){
        console.log(lastNumber);
    }else{
        console.log(resultNumber);
    }

}
smallestOfThreeNumbers(2,
    -5,
    -3003
    )