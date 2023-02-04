function oddEvenSum(num){
    let numAsString = num.toString();
    let evenSum = 0;
    let oddSum = 0;
    let numAsStringLength = numAsString.length;

    for(let index = 0; index < numAsStringLength; index++){
        let singleNum = Number(numAsString[index]);

        if(singleNum % 2 === 0){
            evenSum += singleNum;
        }else{
            oddSum += singleNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddEvenSum(1000435)