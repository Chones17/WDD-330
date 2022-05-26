import loadList from './loadList.js';

const notes = [
    {
        item: `I was more focused on setting up the website on Github than the reading ` +
        `materials. There wasn't anything in particular that I felt that I needed to ` +
        `take notes on.`
    }
  ]


const questions = [
    {
        item: `Does this course require a fundamental understanding of JavaScript or will ` +
        `basic JavaScript be taught in this course?`
    },
    {
        item: `Would you create a video that explains the learning style of this course better?`
    } 
]

loadList('#noteslist', notes);
loadList('#questionslist', questions);