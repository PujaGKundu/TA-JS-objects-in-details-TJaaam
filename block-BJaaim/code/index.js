let form = document.querySelector('form');
let next = document.querySelector('.next');
let prev = document.querySelector('.pre');
let quizElm = document.querySelector('.quiz');
let result = document.querySelector('.result');
let total = document.querySelector('header p');


class Question {
    constructor(title, options, correctIndex) {
        this.title = title;
        this.options = options;
        this.correctIndex = correctIndex;
    }
    isCorrect(answer) {
        return this.options[this.correctIndex] === answer;
    }
    getCorrectAnswer() {
        return this.options[this.correctIndex];
    }
}

class Quiz {
    constructor(questions = [], score = 0) {
        this.questions = questions;
        this.score = score;
        this.activeIndex = 0;
    }
    incrementScore() {
        this.score = this.score + 1;
    }
    nextQue() {
        this.activeIndex =this.activeIndex + 1;
        this.createUI();
    }
    prevQue() {
        this.activeIndex =this.activeIndex - 1;
        this.createUI();
    }
    addQuestion(title, options, correctIndex) {
        let question = new Question(title, options, correctIndex);
        this.questions.push(question);
    }
    handleButtons() {
        if (this.activeIndex === 0) {
            prev.style.visibility = 'hidden';
        }else if (this.activeIndex === (this.questions.length - 1)) {
            next.style.visibility = 'hidden';
            result.style.visibility = 'visible';
        } else {
            prev.style.visibility = 'visible';
            next.style.visibility = 'visible';
            result.style.visibility = 'hidden';
        }        
    }
    createUI() {
        quizElm.innerHTML = "";
        let activeQuestion = this.questions[this.activeIndex];
        let form = document.createElement('form');
        let queNo = document.createElement('p');
        queNo.innerText = `Question Number: ${this.activeIndex + 1}`;
        let fieldset = document.createElement('fieldset');
        let legend = document.createElement('legend');
        legend.innerText = activeQuestion.title;
        let optionsElm = document.createElement('div');
        optionsElm.classList.add('options');
        let buttonWrap = document.createElement('div');
        let button = document.createElement('button');
        button.type = 'submit';
        button.classList.add('submit');
        button.innerText = 'Submit';
        buttonWrap.append(button);

        activeQuestion.options.forEach((option, index) => {
            let input = document.createElement('input');
            let div = document.createElement('div');
            input.id = `option-${index}`;
            input.type = 'radio';
            input.name = 'options';
            input.value = option;
            let label = document.createElement('label');
            label.for = `option-${index}`;
            label.innerText = option;
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                if(input.checked) {
                    if(activeQuestion.isCorrect(input.value)){
                        this.incrementScore();
                        if (this.activeIndex === (this.questions.length - 1)) {
                            alert("You have completed the test. You can view your score!");
                        }else {
                            this.activeIndex =this.activeIndex + 1;
                            this.createUI();
                        }                        
                    }
                }
            });
            div.append(input, label)
            optionsElm.append(div);
        });

        this.handleButtons();
        total.innerText = `Total Questions: ${this.questions.length}`;
        fieldset.append(legend, optionsElm, buttonWrap);
        form.append(queNo, fieldset);
        quizElm.append(form);
    }
}

function init() {
    let quiz = new Quiz();

    quizCollection.forEach(question => {
        quiz.addQuestion(question.title, question.options, question.answerIndex);
    });

    quiz.createUI();

    next.addEventListener('click', quiz.nextQue.bind(quiz));
    prev.addEventListener('click', quiz.prevQue.bind(quiz));
    result.addEventListener('click', () => {
        alert(`Your score is ${quiz.score}`);
        window.location.reload();   
    });

}

init();
