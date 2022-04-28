// 1.2 Write a function that will read the contents of the input, and write them to the div.
function getNumber() {
    let number = document.getElementById('numbers').value;
    document.getElementById('output').innerHTML = addNumbers(number); 
}

function addNumbers(number) {
    let total = 0;
    for (let i = 1; 1 < number; i++) {
        total += i;
    }
    return total;
}

/*
function getNumber1() {
    let number1 = parseInt(document.getElementById('number1').value);
    return number1;
}

function getNumber2() {
    let number2 = parseInt(document.getElementById('number2').value);
    return number2;
}

function setOutput(result) {
    document.getElementById('output2').innerHTML = result;
}

function add() {    
    let result = getNumber1() + getNumber2();
    setOutput(result);
}

let subtract = function() {
    let result = getNumber1() - getNumber2();
    setOutput(result);
}

let multiply = () => {
    let result = getNumber1() * getNumber2();
    setOutput(result);
}
*/