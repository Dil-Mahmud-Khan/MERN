function getToal(ass1, ass2, ass3){
    const total=ass1+ass2+ass3;
    const average=total/3;
    return average;
}
const ass1=60;
const ass2=260;
const ass3=630;
var avg=getToal(ass1,ass2,ass3);
console.log("Total average", avg);
