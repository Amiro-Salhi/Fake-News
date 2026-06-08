const questions = [
    {
        question: "How many days makes a week?",
        optionA: "10 days",
        optionB: "14 days",
        optionC: "5 days",
        optionD: "7 days",
        correctOption: "optionD"
    },
    {
        question: "How many players are allowed on a soccer pitch?",
        optionA: "10 players",
        optionB: "11 players",
        optionC: "9 players",
        optionD: "12 players",
        correctOption: "optionB"
    },
    {
        question: "Who was the first President of USA?",
        optionA: "Donald Trump",
        optionB: "Barack Obama",
        optionC: "Abraham Lincoln",
        optionD: "George Washington",
        correctOption: "optionD"
    },
    {
        question: "30 days has ______?",
        optionA: "January",
        optionB: "December",
        optionC: "June",
        optionD: "August",
        correctOption: "optionC"
    },
    {
        question: "How many hours are in a day?",
        optionA: "30 hours",
        optionB: "38 hours",
        optionC: "48 hours",
        optionD: "24 hours",
        correctOption: "optionD"
    },
    {
        question: "Which is the longest river in the world?",
        optionA: "River Nile",
        optionB: "Long River",
        optionC: "River Niger",
        optionD: "Lake Chad",
        correctOption: "optionA"
    },
    {
        question: "_____ is the hottest continent on Earth?",
        optionA: "Oceania",
        optionB: "Antarctica",
        optionC: "Africa",
        optionD: "North America",
        correctOption: "optionC"
    },
    {
        question: "Which country is the largest in the world?",
        optionA: "Russia",
        optionB: "Canada",
        optionC: "Africa",
        optionD: "Egypt",
        correctOption: "optionA"
    },
    {
        question: "Which of these numbers is an odd number?",
        optionA: "Ten",
        optionB: "Twelve",
        optionC: "Eight",
        optionD: "Eleven",
        correctOption: "optionD"
    },
    {
        question: `"You Can't see me" is a popular saying by`,
        optionA: "Eminem",
        optionB: "Bill Gates",
        optionC: "Chris Brown",
        optionD: "John Cena",
        correctOption: "optionD"
    },
    {
        question: "Where is the world's tallest building located?",
        optionA: "Africa",
        optionB: "California",
        optionC: "Dubai",
        optionD: "Italy",
        correctOption: "optionC"
    },
    {
        question: "The longest river in the United Kingdom is?",
        optionA: "River Severn",
        optionB: "River Mersey",
        optionC: "River Trent",
        optionD: "River Tweed",
        correctOption: "optionA"
    },
    {
        question: "How many permanent teeth does a dog have?",
        optionA: "38",
        optionB: "42",
        optionC: "40",
        optionD: "36",
        correctOption: "optionB"
    },
    {
        question: "Which national team won the football World Cup in 2018?",
        optionA: "England",
        optionB: "Brazil",
        optionC: "Germany",
        optionD: "France",
        correctOption: "optionD"
    },
    {
        question: "Which US state was Donald Trump born in?",
        optionA: "New York",
        optionB: "California",
        optionC: "New Jersey",
        optionD: "Los Angeles",
        correctOption: "optionA"
    },
    {
        question: "How many states does Nigeria have?",
        optionA: "24",
        optionB: "30",
        optionC: "36",
        optionD: "37",
        correctOption: "optionC"
    },
    {
        question: "____ is the capital of Nigeria?",
        optionA: "Abuja",
        optionB: "Lagos",
        optionC: "Calabar",
        optionD: "Kano",
        correctOption: "optionA"
    },
    {
        question: "Los Angeles is also known as?",
        optionA: "Angels City",
        optionB: "Shining city",
        optionC: "City of Angels",
        optionD: "Lost Angels",
        correctOption: "optionC"
    },
    {
        question: "What is the capital of Germany?",
        optionA: "Georgia",
        optionB: "Missouri",
        optionC: "Oklahoma",
        optionD: "Berlin",
        correctOption: "optionD"
    },
    {
        question: "How many sides does a hexagon have?",
        optionA: "Six",
        optionB: "Seven",
        optionC: "Four",
        optionD: "Five",
        correctOption: "optionA"
    },
    {
        question: "How many planets are in the solar system?",
        optionA: "Eleven",
        optionB: "Seven",
        optionC: "Nine",
        optionD: "Eight",
        correctOption: "optionD"
    },
    {
        question: "Which planet is the hottest?",
        optionA: "Jupiter",
        optionB: "Mercury",
        optionC: "Earth",
        optionD: "Venus",
        correctOption: "optionD" 
    }
];

let shuffledQuestions = [];
let questionNumber = 1;
let playerScore = 0;
let wrongAttempt = 0;
let indexNumber = 0;


function handleQuestions() {
    shuffledQuestions = questions
        .sort(() => 0.5 - Math.random())
        .slice(0, 10);
}


function NextQuestion(index) {
    if (shuffledQuestions.length === 0) {
        handleQuestions();
    }

    const currentQuestion = shuffledQuestions[index];

    document.getElementById("question-number").innerHTML = questionNumber;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber];
    const correctAnswer = currentQuestion.correctOption;
    const options = document.getElementsByName("option");

    let selected = false;

    options.forEach(option => {
        if (option.checked) {
            selected = true;

            if (option.value === correctAnswer) {
                playerScore++;
            } else {
                wrongAttempt++;
            }

            indexNumber++;
            questionNumber++;
        }
    });

    if (!selected) {
        alert("Kies een antwoord!");
    }
}


function handleNextQuestion() {
    checkForAnswer();
    unCheckRadioButtons();

    if (indexNumber <= 9) {
        NextQuestion(indexNumber);
    } else {
        handleEndGame();
    }
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    options.forEach(option => option.checked = false);
}

function handleEndGame() {
    alert("Score: " + playerScore + "/10");
    alert("Dat was de quiz en tot de volgende keer!!")
}

window.onload = function () {
    NextQuestion(indexNumber);
};