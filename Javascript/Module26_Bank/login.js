//step 1:
document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    // use .value to get the value of the field
    const email = emailField.value;

    const passField = document.getElementById('user-password');
    const pass = passField.value;

    if (email == "dil@gmail.com" && pass == 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        console.log("Invalid User");
    }
})

