function reverseAnArrayOfNumbers(count, numbers){
    // create new array
    let result = []; // empty array
    // take count elements from numbers
    for(let i = 0; i < count; i++){
        result[count - 1 - i] = numbers[i];//reverse the elements
    }
    console.log(result.join(' '));

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])