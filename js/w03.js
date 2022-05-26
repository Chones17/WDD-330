import loadList from './loadList.js';

const notes = [
    {
        item: `Unlike Java, 'this' is untethered meaning it takes on the ` +
        `attributes of the object named in the object.`
    },
    {
        item: `Objects and methods are significantly easier to produce in ` +
        `JavaScript. Less constraints.`
    }
  ]


const questions = [
    {
        item: `What is a node?`
    }
]

loadList('#noteslist', notes);
loadList('#questionslist', questions);