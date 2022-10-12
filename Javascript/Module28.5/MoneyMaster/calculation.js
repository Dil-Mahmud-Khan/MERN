document.getElementById('calculate').addEventListener('click', function () {
    const foodField = document.getElementById('food');
    const foodFieldString = foodField.value;
    const foodPrice = parseInt(foodFieldString);

    // const calculate=document.getElementById('calculate');
    // if(isNaN(calculate)){
    //     alert('enter a input');
    // }

    const rentField = document.getElementById('rent');
    const rentFieldString = rentField.value;
    const rentPrice = parseInt(rentFieldString);


    const dressField = document.getElementById('dress');
    const dressFieldString = dressField.value;
    const dressPrice = parseInt(dressFieldString);

    const incomeField = document.getElementById('income');
    const incomeFieldString = incomeField.value;
    const incomePrice = parseInt(incomeFieldString);


    const totalExpense = foodPrice + rentPrice + dressPrice;
    const balance = incomePrice - totalExpense;

    const expenseField = document.getElementById('total-expense');
    expenseField.innerText = totalExpense;

    const balanceField = document.getElementById('balance');
    balanceField.innerText = balance;

});

document.getElementById('save-btn').addEventListener('click', function () {
    const saveField = document.getElementById('save');
    const saveFieldString = saveField.value;
    const saveAmount = parseInt(saveFieldString);


    const incomeField = document.getElementById('income');
    const incomeFieldString = incomeField.value;
    const incomePrice = parseInt(incomeFieldString);

    const newSavingAmount = incomePrice * (saveAmount / 100);

    const saveAmountField = document.getElementById('saving-amount');
    saveAmountField.innerText = newSavingAmount;

    
    const remainingBalance = balance - newSavingAmount;
   

    const remainBalance = document.getElementById('remain-balance');
    // remainBalance.innerText = remainingBalance;


})