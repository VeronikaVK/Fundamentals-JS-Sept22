//>>(?<name>[A-Za-z]+)<<(?<price>[\d]+[\.]*[\d]+)!(?<quantity>[\d])

//[>]{2} може и така за >>
//[>]{2,} два или повече
//[\.]* - 0 или повече - може да има или няма
//[\.]? - 0 или една - може да има или няма


function furniture(input) {
    let index = 0;
    let totalMoney = 0;
    const pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+[\.]*[\d]+)!(?<quantity>[\d]+)/g;
    console.log('Bought furniture:');

    while (input[index] !== 'Purchase') {
        let productRow = input[index];
        let validProduct = pattern.exec(productRow);

        while(validProduct !== null){
            const productName = validProduct.groups['name']
            //const productName = validProduct.groups.name;
            console.log(productName);
            const productPrice = validProduct.groups['price'];
            const productQuantity = validProduct.groups['quantity'];

            totalMoney += productPrice * productQuantity;
            validProduct = pattern.exec(productRow);
        }
        index++;
        
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']
)