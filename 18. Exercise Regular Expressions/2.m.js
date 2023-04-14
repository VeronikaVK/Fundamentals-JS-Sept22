function demo(input) {
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+[\.]?\d+)!(?<quantity>\d+)/g;

    let index = 0;
    let totalMoney = 0;

    while (input[index] !== 'Purchase') {
        let productRow = input[index];
        let validProduct = pattern.exec(productRow);

        while (validProduct !== null) {
            const productName = validProduct.groups.name;
            const productPrice = validProduct.groups.price;
            const productQuantity = validProduct.groups.quantity;

            totalMoney += productPrice * productQuantity;

            validProduct = pattern.exec(productRow);
        }
        index++;
    }
    console.log(totalMoney);



}
demo(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])