function quizDemo (title, option, indexOfCorrectAns) {
    var quiz = {};
    quiz.title = title;
    quiz.option = option;
    quiz.indexOfCorrectAns = indexOfCorrectAns;
    quiz.getCorrectAnswer = function() {
        return 2;
    }
    quiz.isAnswerCorrect = function(indexOfCorrectAns) {
        return (this.getCorrectAnswer === indexOfCorrectAns);
    }
    return quiz;
}

const testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
};

let data = quizDemo(testData);