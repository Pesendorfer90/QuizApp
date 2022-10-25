let questions = [
    {
        "question": "Werhat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berner-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wie funktioniert HTML?",
        "answer_1": "Einzelne Befehle: {...}...{/...}",
        "answer_2": "Einzelne Befehle: ...{...}",
        "answer_3": "Einzelne Befehle: <...>...</...>",
        "answer_4": "Einzelne Befehle: (...)...(/...)",
        "right_answer": 3
    },
    {
        "question": "Wie ist eine Website strukturiert?",
        "answer_1": "body head html",
        "answer_2": "html head body",
        "answer_3": "head html body",
        "answer_4": "html body head",
        "right_answer": 2
    },
    {
        "question": "Mit welchem Befehl gibt man die größte Überschrift an?",
        "answer_1": "ü3",
        "answer_2": "h1",
        "answer_3": "h6",
        "answer_4": "ü1",
        "right_answer": 2
    },
    {
        "question": "Wie fügt man ein Bild ein?",
        "answer_1": "picture src=",
        "answer_2": "pic src=",
        "answer_3": "img src=",
        "answer_4": "img href=",
        "right_answer": 3
    },
    {
        "question": "Wie entfernt man den Strich unter einem Link?",
        "answer_1": "Link-decoration: none",
        "answer_2": "Link-decoration: no",
        "answer_3": "Text-decoration: no line",
        "answer_4": "Text-decoration: none",
        "right_answer": 4
    },
    {
        "question": "Kann man Listen in HTML einfügen?",
        "answer_1": "Was sind Listen?",
        "answer_2": "Ja, mit ul",
        "answer_3": "p",
        "answer_4": "50",
        "right_answer": 2
    },
];


let currentQuestion = 0;
let rightAnswers = 0;
let AUDIO_SUCCES = new Audio('audio/win.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');


function init() {
    document.getElementById('question-lenght').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    if (currentQuestion == questions.length) {
        document.getElementById('end-screen').style = ''
        document.getElementById('question-body').style = 'display: none'
        document.getElementById('quiz-img').style = 'display: none'
        document.getElementById('question-lenght2').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightAnswers;
        document.getElementById('progress-container').style = 'display: none'


    } else {

        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);                                // math.round ist zahlen ab/aufrunden
        console.log('Fortschritt:', percent)
        document.getElementById('progress-bar').innerHTML = `${percent}%`
        document.getElementById('progress-bar').style = `width:${percent}%`

    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);                   // über die function kommt ein parameter (selection) mit selection.slice(-1) bekommt man den hintersten buchstaben oder zahl. dieser eine buchstabe oder zahl ist dann selectedQuestionNumber

    let idOfRightAnswer = `answer_${question['right_answer']}`

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightAnswers++;
        AUDIO_SUCCES.play();
    } else {
        console.log('Falsche Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    showQuestion();
    document.getElementById('next-button').disabled = true;
    resetButtons();
}


function resetButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function restart() {
    document.getElementById('end-screen').style = 'display: none'
    document.getElementById('question-body').style = ''
    document.getElementById('quiz-img').style = ''
    currentQuestion = 0;
    rightAnswers = 0;
    document.getElementById('progress-container').style = ''
    init();
}