const notes = [
    {
        note: ""
    }
  ]


const questions = [
    {
        question: ""
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