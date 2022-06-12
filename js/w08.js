import loadList from './loadList.js';

const notes = [
    {
        item: `-webkit-transform is for iOS8 and Android. -ms-transform is for IE9 only.`
    },
    {
        item: `Do not declare mulitple transforms as it will override the previous instance.`
    },
    {
        item: `Transforming to not cause a reflow in the browser.`
    },
    {
        item: `Transitions need to be implemented in the original state.`
    },
    {
        item: `IE9 does not recognize transitions.`
    },
    {
        item: `Transition-property needs to be accompanied by transition-duration.`
    },
    {
        item: `Like transition-property, animation-property needs duration.`
    }
]

const questions = [
    {
        item: `I do not have any questions from this week's readings.`
    }
]

loadList('#noteslist', notes);
loadList('#questionslist', questions);