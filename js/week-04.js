const notes = [
    {
        note: "I am not sure what has happened since the first week. However, I have misunderstood " +
        "some of the reading materials. I have been going back through, week-by-week, to update any " +
        "information that I have missed. This has caused me to redo the Quiz Ninja exercises."
    }
  ]


const questions = [
    {
        question: "I don't have any questions from this week. I realized that I had missed several " +
        "items from the Quiz Ninja exercises that I needed to redo. I have gone back and have been " +
        "cleaning the code on My Portfolio to reflect the exercises."
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