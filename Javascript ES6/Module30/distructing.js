const fish = {
    name: 'ilish',
    address: 'tangail',
    color: "silver",
    phone: "01632913925",
    price: 2500

}

// const color= fish.color;
// console.log(color);          //old way


const { color } = fish;
console.log(color);          ///new way



// For double parameter

const { phone, name } = fish;
console.log(phone, name);


const { age, profession } = { name: "kazi hayaat", age: 45, profession: "broker" };
console.log(profession);


//Array distructing

const [first, another] = [45, 46, 47, 48, 49];
console.log(first, another);


const hero = ['dil', 'mahmud', 'khan'];
const [king, lost, notun] = hero;
console.log(lost);



function getNames() {
    return ["alim", "halid"];
}
const [baba, chacha] = getNames();
console.log(chacha, baba);