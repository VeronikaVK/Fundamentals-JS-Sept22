function createStorage(input){
    let storage = new Map();
    for (const line of input) {
        let[item, quntity] = line.split(' ');
        quntity = Number(quntity)

        if(storage.has(item)){
            quntity += storage.get(item);
        }
        storage.set(item, quntity);
    }
    for (const [item, quntity] of storage) {
        console.log(`${item} -> ${quntity}`);
    }

}
createStorage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)