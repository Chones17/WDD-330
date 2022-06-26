import loadList from './loadList.js';

const notes = [
    {
        item: `'novalidate' prevents the browser from validating the form.`
    },
    {
        item: `There is the Constraint Validation API or custom JavaScript validation. ` +
        `There are also libraries such as Validate.js that help with form validation.`
    },
    {
        item: `I have read the MDN article regarding the Fetch API several weeks ago when ` +
        `we were learning about Promises. I do not have any notes to take at this time.`
    }
]

const questions = [
    {
        item: `Why was it necessary to have input:invalid:required as opposed to input:required?`
    },
    {
        item: `Would it be better to you HTML5 form validation or JavaScript?`
    }
]

loadList('#noteslist', notes);
loadList('#questionslist', questions);