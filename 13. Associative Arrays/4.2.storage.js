function storage(input) {
    let listItemas = {};

    for (const el of input) {
        let itemArr = el.split(' ');
        let name = itemArr.shift();
        let quantity = itemArr.map(x => Number(x));


        if (!listItemas[name]) {
            listItemas[name] = [];
        }
        listItemas[name] = listItemas[name].concat(quantity);

    }

    let itemEntrie = Object.entries(listItemas);


    for (const [name, quantity] of itemEntrie) {
        let sum = 0;
        for (const nums of quantity) {
            sum += nums;
        }
        console.log(`${name} -> ${sum}`);

    }

}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])
