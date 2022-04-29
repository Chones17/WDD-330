/* 1.2 Write a function that will read the contents of the input, and write them to the div. */
function sumNumber() {
    let number = getInput('number');

    /* S.3 Callback */
    setOutput('sumOutput', addNumbers(number));
}

/* S.2 Function should do one thing and do it well. Get Input. */
function getInput(inputID) {
    let number = parseInt(document.getElementById(inputID).value);
    return number;
}

/* S.2 Function should do one thing and do it well. Set Output. */
function setOutput(outputID, result) {
    document.getElementById(outputID).innerHTML = result;
}

/* 2.1 Write a new function that expects a number as an argument. It should take that number 
and sum all the numbers up to the number provided. (ie n=5…so it would do 1+2+3+4+5 = 15) 
It should return that value. */
function addNumbers(number) {
    let total = 0;
    for (let i = 1; i <= number; i++) {
        total += i;
    }
    return total;
}

/* 3.3 Write a function that will take the numbers from each input, add them together, 
and output the result to a div */
function add() {    
    let result = getInput('number1') + getInput('number2');
    setOutput('output2', result);
}

/* S.1 In Javascript there are several ways to define a function: with a function 
declaration, a function expression, or an arrow function. */
let subtract = function() {
    let result = getInput('number1') - getInput('number2');
    setOutput('output2', result);
}

/* S.1 In Javascript there are several ways to define a function: with a function 
declaration, a function expression, or an arrow function. */
let multiply = () => {
    let result = getInput('number1') * getInput('number2');
    setOutput('output2', result);
}