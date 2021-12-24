
// Whitout object
/*
let title = 'Where is the capital of Jordan';
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;

function getCorrectAnswer() {
    return options[correctAnswerIndex];
}
function isAnswerCorrect (index) {
    return index === correctAnswerIndex;
}
*/


// Organize using object
/*
let quizDemo = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
    getCorrectAnswer() {
        return quizDemo.options[quizDemo.correctAnswerIndex];
    },
    isAnswerCorrect (index) {
        return index === quizDemo.correctAnswerIndex;
    },
};
*/



// Use a function to create object
/*
function quiz (title, options, correctAnswer) {
    let quizDemo = {};
    quizDemo.title = title;
    quizDemo.options = options;
    quizDemo.correctAnswerIndex = correctAnswer;
    quizDemo.getCorrectAnswer() {
        return quizDemo.options[quizDemo.correctAnswerIndex];
    }; 
    quizDemo.isAnswerCorrect (index) {
        return index === quizDemo.correctAnswerIndex;
    };
    return quizDemo;
}

const testData = quiz('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);
*/



// Convert the function to use `this` keyword
/*
function quiz (title, options, correctAnswer) {
    let quizDemo = {};
    quizDemo.title = title;
    quizDemo.options = options;
    quizDemo.correctAnswerIndex = correctAnswer;
    quizDemo.getCorrectAnswer() {
        return this.options[this.correctAnswerIndex];
    }; 
    quizDemo .isAnswerCorrect (index) {
        return index === this.correctAnswerIndex;
    };
    return quizDemo;
}

const testData = quiz('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);
*/