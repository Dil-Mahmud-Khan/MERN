var cart={
    books: 3,
    keyboard: 3,
    mouse: 5,
    pen: 34
}
var penCount=cart.pen;
// var penCount=cart['pen'];

console.log(penCount);

var propertyName='keyboard';
var propertyValue=cart[propertyName];
console.log(propertyName,propertyValue);
console.log(cart);

//set property valuescart

cart.mouse=34;
console.log(cart);
cart['pen']=56;
console.log(cart);
cart[propertyName]=99;
console.log(cart);