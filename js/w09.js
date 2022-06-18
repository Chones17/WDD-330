import loadList from './loadList.js';

const notes = [
    {
        item: `parseInt() and isNan() are methods of the global object. ` +
        `Note: ES6 made both methods available in the Number object.`
    },
    {
        item: `alert(), confirm(), and prompt() are also methods of the global object.`
    },
    {
        item: `Be aware of the location and history properties.`
    },
    {
        item: `The screen object is more useful with mobile applications.`
    }
]

const questions = [
    {
        item: `In the reading materials it is referencing the close() method in the ` +
        `window object. However, it shows popup.close()? Is popup a property of the ` +
        `window object?`
    },
    {
        item: `Cookies are appended to the cookie jar. Does the cookie jar work like ` +
        `an array or stack?`
    }
]

loadList('#noteslist', notes);
loadList('#questionslist', questions);