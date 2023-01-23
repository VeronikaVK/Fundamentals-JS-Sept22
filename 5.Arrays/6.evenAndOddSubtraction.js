function evenAndOddSubtraction(numbers) {
    let evenNum = 0;
    let oddNum = 0;
    for (let number of numbers) { //this for cicle is read only, don't modify array
        if (number % 2 == 0) {
            evenNum += number;
        }else{
            oddNum += number
        }
    }
    console.log(evenNum - oddNum);
}
evenAndOddSubtraction([1,2,3,4,5,6])