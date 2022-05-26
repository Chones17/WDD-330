import loadList from './loadList.js';

const notes = [
    {
        item: `There are three different types of errors: system, programmer, ` +
        `and user. It might even be argued that user errors are in fact also ` +
        `programmer errors, because the program should be designed in a way that ` +
        `prevents the user from making the error.`
    },
    {
        item: `Exceptions are errors that produce a return value that can be ` +
        `handled by the program`
    },
    {
        item: `Stack Traces are sequences of functions or method calls that led to ` +
        `the error.`
    },
    {
        item: `Warnings are errors that won't cause the program to crash.`
    },
    {
        item: `Use Strict mode can be used inside functions as well as the entire ` +
        `JavaScript file. Note: Use Strict is not necessary with JavaScript modules.`
    },
    {
        item: `Linting tools such as JS Lint, JS Hint, and ES Lint are important ` +
        `for adhering to coding best practices.`
    },
    {
        item: `RangeError is thrown when a number is outside an allowable range of ` +
        `values.`
    },
    {
        item: `ReferenceError is thrown when a reference is made to an item that do ` +
        `not exist. For example, calling a function that hasn't been defined.`
    },
    {
        item: `SyntaxError is thrown when there is an error in the code\'s syntax.`
    },
    {
        item: `TypeError is thrown when there\'s an error in the type of value ` +
        `used; for example, a string is used when a number is expected.`
    },
    {
        item: `URIError is thrown when there\'s a problem encoding or decoding the URI.`
    },
    {
        item: `InternalError is a non-standard error that is thrown when an error ` +
        `occurs in the JavaScript engine. A common cause of this too much recursion.`
    },
    {
        item: `Test-driven development is beginning with tests before the code is ` +
        `written. 1) Write tests that initially fail. 2) Write code to pass the tests. ` +
        `3) Refactor the code. 4) Test refactored code. 5) Write more tests for new ` +
        `features.`
    }
]


const questions = [
    {
        item: "Is Jest a significant tool in real world applications?"
    }
]

loadList('#noteslist', notes);
loadList('#questionslist', questions);