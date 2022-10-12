//option 4
const pink = document.getElementById('makepink');
pink.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

//another
const green = document.getElementById('makegreen');
green.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})


//the final one we will be using   **important**

document.getElementById('goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})

//

const purple = document.getElementById('makepurple');
purple.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

const makeBlue = document.getElementById('makeblue');
makeBlue.onclick = makeBlued;
function makeBlued() {
    document.body.style.backgroundColor = 'blue';
}

function makeRed() {
    document.body.style.backgroundColor = 'red';
}