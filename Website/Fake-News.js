const questions = [
    {
        question: "Waarom worden deepfakes steeds overtuigender?",
        optionA: "Betere camera's",
        optionB: "Meer trainingsdata en krachtigere AI",
        optionC: "Langzamere computers",
        optionD: "Minder internetgebruik",
        correctOption: "optionB"
    },
    {
        question: "Wat is een risico van AI gegenereerde teksten?",
        optionA: "Ze laden traag",
        optionB: "Ze bevatten vaak typefouten",
        optionC: "Ze kunnen geloofwaardig maar fout zijn",
        optionD: "Ze werken alleen offline",
        correctOption: "optionC"
    },
    {
        question: "Waarom helpt fact checking niet altijd direct?",
        optionA: "Het is verboden",
        optionB: "Nepnieuws verspreidt sneller",
        optionC: "Het kost geen tijd",
        optionD: "Het verwijdert berichten automatisch",
        correctOption: "optionB"
    },
    {
        question: "Wat is een belangrijk kenmerk van AI-manipulatie?",
        optionA: "Altijd zichtbaar",
        optionB: "Subtiel en moeilijk te detecteren",
        optionC: "Alleen tekst",
        optionD: "Alleen video",
        correctOption: "optionB"
    },
    {
        question: "Waarom gebruiken bots nepnieuws?",
        optionA: "Om opslag te verminderen",
        optionB: "Om berichten sneller te verspreiden",
        optionC: "Om internet te verbeteren",
        optionD: "Om data te verwijderen",
        correctOption: "optionB"
    },
    {
        question: "Wat is een gevolg van algoritmes op sociale media?",
        optionA: "Minder content",
        optionB: "Alle berichten zichtbaar",
        optionC: "Versterking van bepaalde meningen",
        optionD: "Geen invloed",
        correctOption: "optionC"
    },
    {
        question: "Wat betekent het als een bron 'Bias' heeft?",
        optionA: "Altijd correct",
        optionB: "Volledig neutraal",
        optionC: "Eenzijdige of gekleurde informatie",
        optionD: "Technisch probleem",
        correctOption: "optionC"
    },
    {
        question: "Waarom is bronvermelding belangrijk?",
        optionA: "Voor opslag",
        optionB: "Voor snelheid",
        optionC: "Voor controleerbaarheid",
        optionD: "Voor design",
        correctOption: "optionC"
    },
    {
        question: "Wat maakt clickbait effectief?",
        optionA: "Korte teksten",
        optionB: "Schokkende of emotionele titels",
        optionC: "Wetenschappelijke taal",
        optionD: "Neutrale inhoud",
        correctOption: "optionB"
    },
    {
        question: "Wat is een betrouwbare manier om info te checken?",
        optionA: "Een bron gebruiken",
        optionB: "Meerdere bronnen vergelijken",
        optionC: "Social media volgen",
        optionD: "Reacties lezen",
        correctOption: "optionB"
    },
    {
        question: "Wat doet AI bij beeldmanipulatie?",
        optionA: "Alleen opslaan",
        optionB: "Kan beelden aanpassen of genereren",
        optionC: "Alleen verkleinen",
        optionD: "Alleen kopieren",
        correctOption: "optionB"
    },
    {
        question: "Waarom vertrouwen mensen soms nepnieuws?",
        optionA: "Het is altijd kort",
        optionB: "Het bevestigt hun mening",
        optionC: "Het is technisch",
        optionD: "Het is oud",
        correctOption: "optionB"
    },
    {
        question: "Wat is een signaal van onbetrouwbare info?",
        optionA: "Duidelijke bronnen",
        optionB: "Evenwichtige toon",
        optionC: "Extreme uitspraken zonder bewijs",
        optionD: "Correcte data",
        correctOption: "optionC"
    },
    {
        question: "Wat doet een recommender system?",
        optionA: "Virussen verwijderen",
        optionB: "Content voorstellen",
        optionC: "Data wissen",
        optionD: "Hardware verbeteren",
        correctOption: "optionB"
    },
    {
        question: "Waarom is snelheid belangrijk bij nepnieuws?",
        optionA: "Voor opslag",
        optionB: "Voor verspreiding voorr correctie",
        optionC: "Voor kwaliteit",
        optionD: "Voor design",
        correctOption: "optionB"
    },
    {
        question: "Wat kan AI met stemmen doen?",
        optionA: "Alleen opnemen",
        optionB: "Realistisch nabootsen",
        optionC: "Alleen verwijderen",
        optionD: "Alleen versnellen",
        correctOption: "optionB"
    },
    {
        question: "Wat is een risico van deepfake audio?",
        optionA: "Slechte kwaliteit",
        optionB: "Misleiding via nepstemmen",
        optionC: "Geen geluid",
        optionD: "Grote bestanden",
        correctOption: "optionB"
    },
    {
        question: "Waarom is mediawijsheid belangrijk?",
        optionA: "Voor snelheid",
        optionB: "Voor opslag",
        optionC: "Voor kritisch beoordelen van info",
        optionD: "Voor design",
        correctOption: "optionC"
    },
    {
        question: "Wat betekent verificatie van info?",
        optionA: "Opslaan",
        optionB: "Controleren op juistheid",
        optionC: "Verwijderen",
        optionD: "Versnellen",
        correctOption: "optionB"
    },
    {
        question: "Wat is een mogelijke impact van nepnieuws?",
        optionA: "Meer opslag",
        optionB: "Verkeerde beslissingen",
        optionC: "Sneller internet",
        optionD: "Minder data",
        correctOption: "optionB"
    },
    {
        question: "Waarom is context belangrijk bij nieuws?",
        optionA: "Voor lengte",
        optionB: "Voor uiterlijk",
        optionC: "Voor juiste interpretatie",
        optionD: "Voor snelheid",
        correctOption: "optionC"
    },
    {
        question: "Wat kun je doen bij twijfel over nieuws?",
        optionA: "Direct delen",
        optionB: "Negeren",
        optionC: "Onderzoeken en checken",
        optionD: "Opslaan",
        correctOption: "optionC"
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