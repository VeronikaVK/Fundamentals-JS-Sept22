function distinctArray(arr) {
    let uniqueNymbersArray = [];

    let arrayLength = arr.length;

    for (let index = 0; index < arrayLength; index++) {
        if (!uniqueNymbersArray.includes(arr[index])) {
            uniqueNymbersArray.push(arr[index])
        }
    }
    console.log(uniqueNymbersArray.join(' '));

}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])