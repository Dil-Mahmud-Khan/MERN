// function add(first,second){
//     const total=first+second;
//     return total;
// }                                //old way
// const dd=add(2,3)
// console.log(dd)


const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}                                //function expression



const add2 = function (first, second) {
    const total = first + second;           //anonymous function
    return total;
}



//arrow function **********

const add3 = (first, second) => first + second;
const result = add3(125, 152);
console.log(result)