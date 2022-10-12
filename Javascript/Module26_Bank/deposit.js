document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value
    const newdepositAmount = parseFloat(depositAmountString);

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalString = depositTotalElement.innerText;       //to get the text value we need to use innerText
    const previousDepositTotal = parseFloat(depositTotalString);

    const currentDepositTotal = newdepositAmount + previousDepositTotal;

    depositTotalElement.innerText = currentDepositTotal;



    //set the total balance

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);

    const currentBalanceTotal = balanceTotal + newdepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';                                 //to get the text value we need to use innerText

})