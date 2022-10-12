function getTextElementValueById(elemenId) {
    const phoneTotalElement = document.getElementById(elemenId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
 
function setTextElementValueById(elemenId,value){
    const subTotalElement=document.getElementById(elemenId);
    subTotalElement.innerText=value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal=currentPhoneTotal+currentCaseTotal;
    setTextElementValueById('sub-total',currentSubTotal);
    
    
    
//    const subTotalElement=document.getElementById('sub-total');

    // subTotalElement.innerText=currentSubTotal;

     const taxAmountString=(currentSubTotal*0.01).toFixed(2);
     const taxAmount=parseFloat(taxAmountString);
     setTextElementValueById('tax-amount',taxAmount);

     const finalAmount=currentSubTotal+taxAmount;
     setTextElementValueById('final-total',finalAmount)

}
