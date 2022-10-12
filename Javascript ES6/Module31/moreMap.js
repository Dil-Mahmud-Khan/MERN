const dil=[5,6,8,3,6,8,12];
const half=dil.map(num=>num/2);
console.log(half)

const third=dil.map(num=>num/3);
console.log(third);

const friends=["dil","mahmud","khan","kaka","messi"];
const friendFirst=friends.map(friend=>friend[0]);
console.log(friendFirst);

const friendLength=friends.map(friend=>friend.length);
console.log(friendLength);


const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];

const name=products.map(product=>product.name);
console.log(name)