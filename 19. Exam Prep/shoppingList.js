function shoppingList(input) {
    let initialShopingList = input.shift().split('!');

    let command = input.shift();

    while (command !== 'Go Shopping!') {
        let lineArgs = command.split(' ');
        let currentCommand = lineArgs[0];
        let firstArgument = lineArgs[1];
        let secondArgument = lineArgs[2];

        switch (currentCommand) {
            case 'Urgent':
                if (!initialShopingList.includes(firstArgument)) {
                    initialShopingList.unshift(firstArgument);
                }
                break;
            case 'Unnecessary':
                initialShopingList = initialShopingList.filter(x => x != firstArgument); // взима и принтира всеки елемент различен от firstArgument

                break;
            case 'Correct':
                let updateIndex = initialShopingList.indexOf(firstArgument);
                if (updateIndex > -1) {
                    initialShopingList[updateIndex] = secondArgument;
                }
                break;
            case 'Rearrange':
                let removeIndex = initialShopingList.indexOf(firstArgument); //взима индекса където се намира елемента

                if (removeIndex > -1) {//ако инзекса е валиден, тоест елемента съществува
                    let element = initialShopingList[removeIndex]
                    initialShopingList.splice(removeIndex, 1).push(element);
                }
                break;
        }

        command = input.shift();
    }
    console.log(initialShopingList.join(', '));

}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]
)