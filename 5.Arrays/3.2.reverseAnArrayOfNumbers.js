function reverseAnArrayOfNumbers(count, numbers) {
    // create new array
    let reverseNum = []; // empty array
    // take count elements from numbers
    for (let i = 0; i < count; i++) {
        reverseNum[i] = numbers[count - 1 - i];//reverse the elements
    }


    let result = '';
    for (let i = 0; i < reverseNum.length; i++) {
        result += reverseNum[i];

        if (i < reverseNum.length - 1) {
            result += ' ';
        }
    }
    console.log(result);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])