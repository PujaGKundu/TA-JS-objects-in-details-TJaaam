//- Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
/*
let createCorrect = {
    isAnswerCorrect(index) {
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer() {
        return this.options[this.correctAnswerIndex];
    },
}

function Question (title, options, correctAnswer) {
    let quizDemo = Object.create(createCorrect);
    quizDemo.title = title;
    quizDemo.options = options;
    quizDemo.correctAnswerIndex = correctAnswer;
    return quizDemo;
}
*/




//- Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)

/*
function Question (title, options, correctAnswer) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswer;
}

Question.prototype = {
    isAnswerCorrect(index) {
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer() {
        return this.options[this.correctAnswerIndex];
    },
}
*/


//- Create using class



class Question {
    constructor(title, options, correctAnswer) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswer;
    }
    isAnswerCorrect(index) {
        return index === this.correctAnswerIndex;
    }
    getCorrectAnswer() {
        return this.options[this.correctAnswerIndex];
    }
}



//- Write test by creating two objects also test both methods.
let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);
let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
);