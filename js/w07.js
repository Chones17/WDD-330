import loadList from './loadList.js';

const notes = [
    {
        item: `Functions have inherent methods such as call() or apply().`
    },
    {
        item: `Functions also can have custom properties. (Example: square.description)`
    },
    {
        item: `Need to review destructuring from previous chapters.`
    },
    {
        item: `Promises are better handlers for asynchronous activities.`
    },
    {
        item: `Ajax was originally devloped with XML. JSON is more popular today.`
    }
]

const questions = [
    {
        item: `I understand that memoization is a caching of a value. I do not ` +
        `understand the function square() example in the materials. What is the ` +
        `process that the function is going through?`
    },
    {
        item: `What is a real world example of an Immediately Invoked Function Expression?`
    },
    {
        item: `What is the difference between a Promise and a Callback? Is a Promise ` +
        `just another JavaScript object?`
    }
]

loadList('#noteslist', notes);
loadList('#questionslist', questions);