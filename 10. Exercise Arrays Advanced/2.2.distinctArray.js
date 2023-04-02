function distinctArray(arr) {
    let uniqueNymbers = new Set(arr);


    console.log([...uniqueNymbers].join(' '));

}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])