function getCalculate(elementId) {
    const coachExpenseField = document.getElementById(elementId);
    const coachExpenseString = coachExpenseField.value;
    const coachExpense = parseInt(coachExpenseString);
    return coachExpense;
};

function setCalculate(elementId, value) {
    const nothing = document.getElementById(elementId);
    nothing.innerText = value;
};

document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerField = document.getElementById('per-player');
    const perPlayerString = perPlayerField.value;
    const perPlayer = parseInt(perPlayerString);

    const playerExpenseField = document.getElementById('player-expense');
    const expense = perPlayer * 5;
    playerExpenseField.innerText = expense;
    perPlayerField.value = '';

});

document.getElementById('calculate-total').addEventListener('click', function () {
    dil();

});

function dil() {

    const dada = document.getElementById('player-expense');
    const dadaString = dada.innerText;
    const expense = parseInt(dadaString);

    const coachExpense = getCalculate('coach');
    const managerExpense = getCalculate('manager');

    const total = coachExpense + managerExpense;
    const dil = total + expense;
    setCalculate('total', dil);

}

