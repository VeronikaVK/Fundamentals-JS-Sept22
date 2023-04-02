function sumEvenNumbers(numbers) {
    let sum = 0;
    for (let textnumber of numbers) { //this for cicle is read only, don't modify array
        let number = Number(textnumber);
        if (number % 2 == 0) {
            sum += number;
        }
    }
    console.log(sum);

}
sumEvenNumbers(['1', '2', '3', '4', '5', '6'])