function searchForANumber(nums, actions){
    let numbersToTake = actions[0];
    let takenNumbers = nums.slice(0, numbersToTake); //[5, 2, 3, 4, 1]

    let numbersToDelete = actions[1];
    takenNumbers.splice(0, numbersToDelete);//[3, 4, 1]

    let specialNumber = actions[2];
    let counter = 0;
    for(const number of takenNumbers){
        if(number === specialNumber){
            counter++;
        }
    }
    console.log(`Number ${specialNumber} occurs ${counter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )