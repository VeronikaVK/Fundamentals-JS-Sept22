function storeProvision(available, delivery) {
    const storeProducts = {};
    const availableLength = available.length;
    const deliveryLength = delivery.length;

    for (let index = 0; index < availableLength; index += 2) {
        const currentProduct = available[index];
        storeProducts[currentProduct] = Number(available[index + 1]);
    }
    for (let index = 0; index < deliveryLength; index += 2) {
        const currentProduct = delivery[index];
        if (!storeProducts.hasOwnProperty(currentProduct)) {
            storeProducts[currentProduct] = 0;
        }
        storeProducts[currentProduct] += Number(delivery[index + 1]);
    }
    /// console.log(storeProducts); {Chips: 5, CocaCola: 9, Bananas: 44, Pasta: 11, Beer: 2, …}

    for (const product in storeProducts) {
        console.log(`${product} -> ${storeProducts[product]}`);
            
        }
    }


storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
)