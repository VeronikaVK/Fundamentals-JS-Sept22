function train(arr){
    let passangersInTrain = arr.shift().split(' ').map(Number); //изрязва първият масив, обръща го в стринг, после в число
    let maxCapacity = Number(arr.shift());

    let arrLength = arr.length

    for(let index = 0; index < arrLength; index++){
        let currentRow = arr[index].split(' ');// при Add 10 връща ['Add', '10']

        if(currentRow[0] === 'Add'){
            //'Add 10'
            let newWagonPassangers = Number(currentRow[1]);
            passangersInTrain.push(newWagonPassangers);
        } else{
            //'30'
            for(let j = 0; j < passangersInTrain.length; j++){
                let passangersInCurrentWagon = passangersInTrain[j];
                if(passangersInCurrentWagon + Number(currentRow[0]) <= maxCapacity){
                    passangersInTrain[j] += Number(currentRow[0]);
                    break
                }
            }
        }

    }
    console.log(passangersInTrain.join(' '));

}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)