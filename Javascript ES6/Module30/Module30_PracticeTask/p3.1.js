const dil=[3,5,2];
const kaka=(arr)=>{
    let rafi=[];
    let Sum=[];
    let sum=0;
    for(let i=0;i<arr.length;i++){
        const sq=arr[i];
        const sqr=sq*sq;
        rafi.push(sqr);
        sum=sum+arr[i]; 
        Sum.push(sum); 
    }
    // return rafi;
    return Sum;
    
}
const mesi=kaka(dil);
console.log(mesi);
