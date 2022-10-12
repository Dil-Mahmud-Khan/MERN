function leap(number){
    const result=number%4;
    if(result==0){
        return true;
    }
    else{
        return false;
    }
}
const dil=leap(1933); //2004 will be true for example
console.log(dil);