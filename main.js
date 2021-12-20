const quizdata = [{
        question: 'How old are you?',
        a: '21',
        b: '22',
        c: '18',
        d: '19',
        correct: 'b'
    }, {
        question: 'what is the best programming langauge?',
        a: 'java',
        b: 'c',
        c: 'c++',
        d: 'js',
        correct: 'd'
    },
    {
        question: 'what are the languages you know?',
        a: 'html',
        b: 'css',
        c: 'js',
        d: 'all of the above',
        correct: 'd'
    },
    {
        question: 'js means?',
        a: 'javascript',
        b: 'jummascript',
        c: 'j script',
        d: 'None of the above',
        correct: 'a'
    },
];
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById('questions');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {


    const currentquizData = quizdata[currentQuiz];

    questionEl.innerHTML = currentquizData.question;
    a_text.innerText = currentquizData.a;
    b_text.innerText = currentquizData.b;
    c_text.innerText = currentquizData.c;
    d_text.innerText = currentquizData.d;
    deselectAnswer();
}

function getSelected() {

    let answer = undefined;
    answerEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    });
    return answer;
}

function deselectAnswer() {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {
        if (answer === quizdata[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizdata.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2> your quiz score is ${score}/${quizdata.length}.</h2><button onclick="location.reload()"> Reload</button>`

        };
    }
});