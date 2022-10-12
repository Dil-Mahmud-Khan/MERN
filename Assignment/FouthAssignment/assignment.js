// Problem 1: radianToDegree
function radianToDegree(radian) {
    if (typeof radian !== 'number') {
        return "Please Enter a valid input !!";
    }
    let pi = 3.1416;
    let radians = (radian * (180 / pi));
    radians = radians.toFixed(2);
    return radians;
}


//const dil = radianToDegree("s"); this will show an error
const dil = radianToDegree(199);
console.log(dil);
//Problem 2: isJavaScriptFile
function isJavaScriptFile(String) {
    if (typeof String !== "string") {
        return "Please Enter a valid input !!";
    }
    if (String.endsWith(".js")) {
        return true;
    }
    else {
        return false;
    }
}

// const mahmud = isJavaScriptFile(34); this will show an error
const mahmud = isJavaScriptFile("dil.js");
console.log(mahmud);






//Problem 3: oilPrice
function oilPrice(dieselquantity, petrolquantity, octenquantity) {
    if (typeof dieselquantity !== 'number' || typeof petrolquantity !== 'number' || typeof octenquantity !== 'number') {
        return "Please Enter a valid input !!";
    }
    let dieselPrice = 114;
    let petrolPrice = 130;
    let ocetenPrice = 135;
    let sum = ((114 * dieselquantity) + (130 * petrolquantity) + (135 * octenquantity))
    return sum;
}
// const khan = oilPrice(1, 's', 2); this will show an error
const khan = oilPrice(1, 0, 2);
console.log(khan);




//Problem 4: publicBusFare
function publicBusFare(number) {
    if (typeof number !== 'number') {
        return "Please Enter a valid input !!";
    }
    let busRemaining = (number % 50);
    let microbusRemaining = (busRemaining % 11);
    let publicReamaining = microbusRemaining * 250;
    return publicReamaining;
}
const tom = publicBusFare(55);
console.log(tom);




//Problem 5: isBestFriend

const friends = [
    { name: "dil", friend: "sajib" },
    { name: "sajib", friend: "dil" },
]

function isBestFriend(dost) {
    if (typeof dost === "object") {
        if (dost[0].name === dost[1].friend && dost[1].name === dost[0].friend) {
            return true;
        }
        else {
            return false;
        }
    }
    return "Please enter a valid input !!";
}
const buddy = isBestFriend(friends);
console.log(buddy);
