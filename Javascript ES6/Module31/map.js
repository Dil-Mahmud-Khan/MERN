const numbers=[32,234,453,2,234,233,2];
const output=[];

// function getDoubles(){
    
//     for(const number of numbers){
//         const doubled=number*2;
//         output.push(doubled);
//     }
//     return output;
// }
// const dil=getDoubles()
// console.log(dil);


//map

const doubleIt=num=>num*2;
const makedouble=numbers.map(doubleIt)
console.log(makedouble);

const makeDoubleDirect=numbers.map(num=>num*2);
console.log(makeDoubleDirect);



const fiveTimes = [1,2,3,4,5].map(x => x * 5);
console.log(fiveTimes);
