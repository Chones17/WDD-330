import loadList from './loadList.js';

const notes = [
    {
        item: `I am not sure what has happened since the first week. However, ` +
        `I have misunderstood some of the reading materials. I have been going ` +
        `back through, week-by-week, to update any information that I have ` +
        `missed. This has caused me to redo the Quiz Ninja exercises.`
    },
  ]


const questions = [
    {
        item: `I don't have any questions from this week. I realized that I ` +
        `had missed several items from the Quiz Ninja exercises that I needed ` +
        `to redo. I have gone back and have been cleaning the code on My ` +
        `Portfolio to reflect the exercises.`
    },
]

loadList('#noteslist', notes);
loadList('#questionslist', questions);