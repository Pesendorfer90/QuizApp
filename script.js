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


function init() {
    document.getElementById('question-lenght').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);                   // über die function kommt ein parameter (selection) mit selection.slice(-1) bekommt man den hintersten buchstaben oder zahl. dieser eine buchstabe oder zahl ist dann selectedQuestionNumber

    let idOfRightAnswer = `answer_${question['right_answer']}`

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('Falsche Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
    document.getElementById('next-button').disabled = true;

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}