
const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 2 },
    { name: 'shirt', price: 2200, quantity: 5 },
    { name: 'pant', price: 3700, quantity: 4 },
    { name: 'belt', price: 600, quantity: 3 },
];

function cost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const total = product.price * product.quantity;
        sum = sum + total;
    }
    return sum;
}

const dil = cost(shoppingCart);
console.log(dil);