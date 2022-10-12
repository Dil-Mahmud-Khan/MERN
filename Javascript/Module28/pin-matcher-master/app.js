console.log('added');

function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}


function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();

    const displayField = document.getElementById('display-pin');
    displayField.value = pin;

});

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('type-numbers');
    const previousTypeNumber = typeNumberField.value;

    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        }


        else if (number === '<') {
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainDigits = digits.join('');
            typeNumberField.value = remainDigits;
        }
    }
    else {
        const newTypedNumber = previousTypeNumber + number;
        typeNumberField.value = newTypedNumber;
    }
});


document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('type-numbers');
    const typeNumber = typeNumberField.value;
    const pinSuccessMessage = document.getElementById('pin-success')
    const pinfail = document.getElementById('pin-fail');

    if (typeNumber === currentPin) {
        pinSuccessMessage.style.display = 'block';
        pinfail.style.display = 'block';

    }
    else {
        pinfail.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})