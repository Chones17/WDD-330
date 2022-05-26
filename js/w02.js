import loadList from './loadList.js';

const notes = [
    {
        item: `There is an interesting difference between JavaScript and other ` +
        `programming languages.`
    },
    {
        item: `There is not a differentiation between floats and integers. They ` +
        `are just numbers.`
    }
  ]


const questions = [
    {
        item: `What is the "Symbol" primitive type used for?`
    },
    {
        item: `When would a programmer use Bitwise operators?`
    } 
]

loadList('#noteslist', notes);
loadList('#questionslist', questions);