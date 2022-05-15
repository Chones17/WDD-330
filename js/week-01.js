const notes = [
    {
        note: "I was more focused on setting up the website on Github than the reading materials. " + 
        "There wasn't anything in particular that I felt that I needed to take notes on."
    }
  ]


const questions = [
    {
        question: "Does this course require a fundamental understanding of JavaScript or will " +
        "basic JavaScript be taught in this course?"
    },
    {
        question: "Would you create a video that explains the learning style of this course better?"
    } 
]

function loadNotes() {
    const ol = document.querySelector("#notes-list");

    notes.forEach( item => {
        const li = document.createElement("li");
        li.innerText = item.note;

        ol.appendChild(li);
    })
}

function loadQuestions() {
    const ol = document.querySelector("#questions-list");

    questions.forEach( item => {
        const li = document.createElement("li");
        li.innerText = item.question;

        ol.appendChild(li);
    })
}