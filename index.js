function add(a, b) {
return a + b;
}
function subtract(a, b) {
return a - b;
}
function multiply(a, b) {
return a * b;
}
function divide(a, b) {
return a / b;
}

//reset number
number = 10;

function increment(add5) {
return (add5 += 1);
}

function decrement(subtract5) {
return (subtract5 -= 1);
}

function makeInt(string) {
return parseInt(string, 10 );
}

function preserveDecimal(string) {
return parseFloat(string);
}