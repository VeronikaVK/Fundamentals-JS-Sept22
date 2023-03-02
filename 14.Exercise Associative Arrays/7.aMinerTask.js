function aMinerTask(input){
    let collection = {};

    for(let i = 0; i < input.length; i+= 2){
        const resource = input[i];
        const quantity = Number(input[i + 1]);

        if(!collection.hasOwnProperty(resource)){
            collection[resource] = 0;
        }
        collection[resource] += quantity;
    }

    for (const iteam in collection) {
        console.log(`${iteam} -> ${collection[iteam]}`);
    }
}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )