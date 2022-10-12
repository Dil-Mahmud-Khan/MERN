function add(first, second = 2) {
    const total = first + second;
    return total;
}
const dil = add(3)
console.log(dil);

function fullName(first, last = "khan") {
    const name = first + ' ' + last;
    return name;
}
const name = fullName("Dil Mahmud");
console.log(name);