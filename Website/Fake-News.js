const questions = [
    {
        question: "Wat is Deepfake?",
        optionA: "Een antivirusprogramma",
        optionB: "Een door AI gemaakte nepvideo of audio",
        optionC: "Een type computerchip",
        optionD: "Een programmeertaal",
        correctOption: "optionB"
    },
    {
        question: "Waar wordt AI vaak voor gebruikt bij Nepnieuws?",
        optionA: "Het verbeteren van wifi",
        optionB: "Het automatisch genereren van teksten en afbeeldingen",
        optionC: "Het maken van hardware",
        optionD: "Het repareren van computers",
        correctOption: "optionB"
    },
    {
        question: "Wat is een belangrijke reden waarom nepnieuws gevaarlijk is?",
        optionA: "Het kost veel opslagruimte",
        optionB: "Het vertraagt internet",
        optionC: "Het maakt computers kapot",
        optionD: "Het verspreidt verkeerde informatie en beïnvloedt meningen",
        correctOption: "optionD"
    },
    {
        question: "Hoe kun je nepnieuws het beste herkennen?",
        optionA: " Alles meteen geloven",
        optionB: "Alleen naar de titel kijken",
        optionC: "Bronnen controleren en vergelijken",
        optionD: "Alleen op sociale media lezen",
        correctOption: "optionC"
    },
    {
        question: "Welke technologie maakt realistische nepstemmen mogelijk?",
        optionA: "GPS",
        optionB: "AI-spraaksynthese",
        optionC: "Blockchain",
        optionD: "Bluetooth",
        correctOption: "optionB"
    },
    {
        question: "Wat betekent “bias” in AI?",
        optionA: "Vooringenomenheid in data of algoritmes",
        optionB: "Een soort softwarefout",
        optionC: "Snellere prestaties",
        optionD: "Minder opslaggebruik",
        correctOption: "optionA"
    },
    {
        question: "Welke van deze is een voorbeeld van nepnieuws?",
        optionA: "Een wetenschappelijk artikel met bronnen",
        optionB: "Een gecontroleerd nieuwsbericht",
        optionC: "Een verzonnen verhaal dat als echt wordt gepresenteerd",
        optionD: "Een officiële overheidspublicatie",
        correctOption: "optionC"
    },
    {
        question: "Waarom kunnen deepfakes moeilijk te herkennen zijn?",
        optionA: "Omdat ze zeer realistisch zijn gemaakt met AI",
        optionB: "Omdat ze zwart-wit zijn",
        optionC: "Omdat ze vaak lage kwaliteit hebben",
        optionD: "Omdat ze altijd online verschijnen",
        correctOption: "optionA"
    },
    {
        question: "Wat kun je het beste doen als je denkt dat iets nepnieuws is?",
        optionA: "Meteen delen",
        optionB: "Niets doen",
        optionC: "Alleen je vrienden vragen",
        optionD: "Het controleren via betrouwbare bronnen",
        correctOption: "optionD"
    },
    {
        question: "Welke rol speelt sociale media bij nepnieuws?",
        optionA: "Geen rol",
        optionB: "Het helpt alleen bij educatie",
        optionC: "Het voorkomt nepnieuws volledig",
        optionD: "Het kan nepnieuws snel verspreiden",
        correctOption: "optionD"
    },
    {
        question: "Wat doet een algoritme op sociale media vaak?",
        optionA: "Alleen berichten verwijderen",
        optionB: "Internet sneller maken",
        optionC: "Bepalen welke content je ziet",
        optionD: "Virussen detecteren",
        correctOption: "optionC"
    },
    {
        question: "Wat is een “bot” op sociale media?",
        optionA: "Een automatisch programma dat berichten plaatst",
        optionB: "Een menselijke moderator",
        optionC: "Een soort virus",
        optionD: "Een spelaccount",
        correctOption: "optionA"
    },
    {
        question: "Wat betekent “fact-checking”?",
        optionA: "Nieuws maken",
        optionB: "Informatie controleren op waarheid",
        optionC: "Foto's bewerken",
        optionD: "Video's versnellen",
        correctOption: "optionB"
    },
    {
        question: "Waarom gebruiken makers AI voor nepnieuws?",
        optionA: "Omdat het duurder is",
        optionB: "Omdat het verboden is",
        optionC: "Omdat het geen effect heeft",
        optionD: "Omdat het sneller en goedkoper content kan maken",
        correctOption: "optionD"
    },
    {
        question: "Wat is een gevolg van nepnieuws?",
        optionA: "Verwarring en misleiding",
        optionB: "Betere technologie",
        optionC: "Minder vertrouwen in media",
        optionD: "Minder internetgebruik",
        correctOption: "optionA"
    },
    {
        question: "Welke bron is meestal het meest betrouwbaar?",
        optionA: "Onbekende social media accounts",
        optionB: "Berichten zonder bronvermelding",
        optionC: "Erkende nieuwsorganisaties",
        optionD: "Blogs zonder auteur",
        correctOption: "optionC"
    },
    {
        question: "Wat is kenmerkend voor clickbait?",
        optionA: "Overdreven of misleidende koppen",
        optionB: "Informatieve titels",
        optionC: "Neutrale toon",
        optionD: " Officiële rapporten",
        correctOption: "optionA"
    },
    {
        question: "Wat kan AI doen met afbeeldingen?",
        optionA: "Alleen opslaan",
        optionB: "Alleen zwart-wit maken",
        optionC: "Realistische nepbeelden genereren",
        optionD: "Alleen verkleinen",
        correctOption: "optionC"
    },
    {
        question: "Waarom is kritisch nadenken belangrijk bij nieuws?",
        optionA: "Om Globaal te lezen",
        optionB: "Om meer advertenties te zien",
        optionC: "Om minder informatie te krijgen",
        optionD: "Om nepnieuws te herkennen",
        correctOption: "optionD"
    },
    {
        question: "Wat is een van de signalen dat nieuws mogelijk nep is?",
        optionA: "Sensationele claims zonder bewijs",
        optionB: "Meerdere betrouwbare bronnen",
        optionC: "Duidelijke auteur en datum",
        optionD: "Correcte spelling",
        correctOption: "optionA"
    },
    {
        question: "Wat kun je doen om verspreiding van nepnieuws te verminderen?",
        optionA: "Alles delen wat je ziet",
        optionB: "Alles negeren",
        optionC: "Alleen reageren met Emoji's",
        optionD: "Eerst controleren voordat je deelt",
        correctOption: "optionD"
    },
    {
        question: "Wat betekent “misinformatie”?",
        optionA: "Informatie die expres wordt vervalst",
        optionB: "Onjuiste informatie die per ongeluk wordt gedeeld",
        optionC: "Alleen wetenschappelijke data",
        optionD: "Alleen wetenschappelijke data",
        correctOption: "optionB" 
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