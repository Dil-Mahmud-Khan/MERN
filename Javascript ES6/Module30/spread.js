const max=Math.max(12,32,44,23,11,65);        //old way
console.log(max);

const numbers=[12,12,43,65,77,46,23];
const largest=Math.max(...numbers);         //new way

const numbers2=[...numbers];
numbers.push(90);
numbers2.push(212);


console.log(numbers);
console.log(numbers2);

const numbers3=[...numbers]
const numbers4=[444,5443,232,...numbers,343,2322];
console.log(numbers4);


