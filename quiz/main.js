/* Code added from Chapter 3. */
// const quiz = [
//     ["What is Superman's real name?","Clark Kent"],
//     ["What is Wonder Woman's real name?","Diana Prince"],
//     ["What is Batman's real name?","Bruce Wayne"]
// ];

/* Code added from Chapter 1. */
// alert('Welcome to Quiz Ninja!');

/* Code added from Chapter 2. */
// const question = "What is Superman's real name?"
// const answer = prompt(question);
// alert(`You answered ${answer}`);

/* Additional code added from Chapter 3. */
// let score = 0
// for(const [question, answer] of quiz) {
//     const response = prompt(question);
//     if(response === answer){
//         alert('Correct!');
//         score++;
//     } else {
//         alert(`Wrong! The correct answer was ${answer}`);
//     }
// }

// alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);


/* Code added from Chapter 4. */
// const quiz = [
//     ["What is Superman's real name?","Clark Kent"],
//     ["What is Wonder Woman's real name?","Diana Prince"],
//     ["What is Batman's real name?","Bruce Wayne"]
// ];

// function start(quiz){
//     let score = 0;

//     // main game loop
//     for(const [question,answer] of quiz){
//         const response = ask(question);
//         check(response,answer);
//     }
//     // end of main game loop

//     gameOver();

//     // function declarations
//     function ask(question){
//         return prompt(question);
//     }

//     function check(response,answer){
//         if(response === answer){
//         alert('Correct!');
//         score++;
//         } else {
//         alert(`Wrong! The correct answer was ${answer}`);
//         }
//     }

//     function gameOver(){
//         alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
//     }
// }
// start(quiz);

/* Code added from Chapter 5. */
const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
];

/* Code added from Chapter 6. */
// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    response: document.querySelector('#response'),
    render(target,content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element){
        element.style.display = 'block';
    },
    hide(element){
        element.style.display = 'none';
    },
    setup(){
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score,game.score);
        this.render(this.result,'');
        this.render(this.info,'');
        this.resetForm();
    },
    resetForm(){
        this.response.answer.value = '';
        this.response.answer.focus();
    },
    teardown(){
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    }
};

/* Additional code added from Chapter 5. */
const game = {
    start(quiz){
        console.log('start() invoked');
        // view.hide(view.start);
        this.questions = [...quiz];
        this.score = 0;
        // main game loop
        // for(const question of this.questions){
        // this.question = question;
        view.setup();
        this.ask();
        // }
        // end of main game loop
        // this.gameOver();
    },
    ask(){
        console.log('ask() invoked');
        // const question = `What is ${this.question.name}'s real name?`;
        // view.render(view.question,question);
        // const response =  prompt(question);
        // this.check(response);
        if(this.questions.length > 0) {
            this.question = this.questions.pop();
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question,question);
        }
        else {
            this.gameOver();
        }
    },
    check(event){
        console.log('check(event) invoked');
        // const answer = this.question.realName;
        // if(response === answer){
        // view.render(view.result,'Correct!',{'class':'correct'});
        // alert('Correct!');
        // this.score++;
        // view.render(view.score,this.score);
        // } else {
        // view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        // alert(`Wrong! The correct answer was ${answer}`);
        // }
        event.preventDefault();
        const response = view.response.answer.value;
        const answer = this.question.realName;
        if(response === answer){
            view.render(view.result,'Correct!',{'class':'correct'});
            this.score++;
            view.render(view.score,this.score);
        } else {
            view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        }
        view.resetForm();
        this.ask();
    },
    gameOver(){
        console.log('gameOver() invoked');
        // view.show(view.start);
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.teardown();
    }
}

// game.start(quiz);

/* Code added from Chapter 7 */
// 

/* Code added from Chapter 8. */
view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);