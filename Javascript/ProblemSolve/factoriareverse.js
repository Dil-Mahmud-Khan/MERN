function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
        console.log(i);
    }
    return result;
}
factorial(6);