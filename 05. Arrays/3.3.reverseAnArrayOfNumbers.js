function reverseAnArrayOfNumbers(count, numbers){
    // create new array
    let result = []; // empty array
    // take count elements from numbers
    for(let i = count - 1; i >= 0; i--){
        result.push(numbers[i]);
    }
    console.log(result.join(' '));

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])