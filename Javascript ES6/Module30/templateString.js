const person="dil";
const person2="mahmud";
const person3="khan";

const multiline='Fist line is \n'+
'second line is \n';
console.log(multiline);

//  Shortcut template string
const newMultiline=`First line is here
Second line is below
Third line is under below`;
console.log(newMultiline);



const a=34;
const b=32;

const summary="sum of: "+ a +" and "+b +" is "+(a+b);
console.log(summary);


const newSummary=`sum of ${a} and sum of ${b} is: ${a+b}`;
console.log(newSummary);