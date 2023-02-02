function arrayRotation(arrayToRotate, rotations){
    for(let index = 0; index < rotations; index++){
        let numToMove = arrayToRotate.shift();//cut element from array on index 0
        arrayToRotate.push(numToMove);
    }
    console.log(arrayToRotate.join(' '));

}
arrayRotation([51, 47, 32, 61, 21], 2)