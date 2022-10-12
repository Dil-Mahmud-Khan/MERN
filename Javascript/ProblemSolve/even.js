function even(number){
    const remainder=number%2;
    if(remainder==0){
        return true;
    }
    else{
        return false;
    }
}
const dil=even(15);
console.log(dil);