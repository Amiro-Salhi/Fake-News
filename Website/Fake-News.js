function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

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
        question: "Waarom verspreidt nepnieuws zich vaak sneller dan echt nieuws?",
        optionA: "Het is verboden",
        optionB: "Het is spannender en emotioneler",
        optionC: "Het kost geen tijd",
        optionD: "Het wordt automatisch verwijderd",
        correctOption: "optionB"
    },
    {
        question: "Wat is kenmerkend voor AI manipulatie?",
        optionA: "Altijd zichtbaar",
        optionB: "Subtiel en moeilijk te detecteren",
        optionC: "Alleen tekst",
        optionD: "Alleen video",
        correctOption: "optionB"
    },
    {
        question: "Waarom gebruiken bots nepnieuws?",
        optionA: "Om opslag te verminderen",
        optionB: "Om berichten snel te verspreiden",
        optionC: "Om internet te verbeteren",
        optionD: "Om data te verwijderen",
        correctOption: "optionB"
    },
    {
        question: "Wat doen algoritmes op sociale media?",
        optionA: "Ze verwijderen alles",
        optionB: "Ze tonen geselecteerde content",
        optionC: "Ze versnellen internet",
        optionD: "Ze blokkeren gebruikers",
        correctOption: "optionB"
    },
    {
        question: "Wat betekent Bias in informatie?",
        optionA: "Altijd neutraal",
        optionB: "Altijd correct",
        optionC: "Eenzijdig of gekleurd",
        optionD: "Technisch probleem",
        correctOption: "optionC"
    },
    {
        question: "Waarom is bronvermelding belangrijk?",
        optionA: "Voor snelheid",
        optionB: "Voor controleerbaarheid",
        optionC: "Voor design",
        optionD: "Voor opslag",
        correctOption: "optionB"
    },
    {
        question: "Wat maakt clickbait effectief?",
        optionA: "Korte zinnen",
        optionB: "Emotionele of schokkende titels",
        optionC: "Wetenschappelijke taal",
        optionD: "Neutrale toon",
        correctOption: "optionB"
    },
    {
        question: "Wat is de beste manier om informatie te controleren?",
        optionA: "Een bron gebruiken",
        optionB: "Meerdere bronnen vergelijken",
        optionC: "Social media volgen",
        optionD: "Reacties lezen",
        correctOption: "optionB"
    },
    {
        question: "Wat kan AI doen met beelden?",
        optionA: "Alleen opslaan",
        optionB: "Aanpassen of genereren",
        optionC: "Alleen verkleinen",
        optionD: "Alleen kopieren",
        correctOption: "optionB"
    },
    {
        question: "Waarom geloven mensen soms nepnieuws?",
        optionA: "Het is altijd kort",
        optionB: "Het bevestigt hun mening",
        optionC: "Het is technisch",
        optionD: "Het is oud",
        correctOption: "optionB"
    },
    {
        question: "Wat is een teken van onbetrouwbare informatie?",
        optionA: "Duidelijke bronnen",
        optionB: "Evenwichtige toon",
        optionC: "Extreme claims zonder bewijs",
        optionD: "Correcte data",
        correctOption: "optionC"
    },
    {
        question: "Wat is een recommender system?",
        optionA: "Virus scanner",
        optionB: "Systeem dat content aanbeveelt",
        optionC: "Data verwijderaar",
        optionD: "Hardware tool",
        correctOption: "optionB"
    },
    {
        question: "Waarom is snelheid belangrijk bij nepnieuws?",
        optionA: "Voor opslag",
        optionB: "Om correcties voor te zijn",
        optionC: "Voor kwaliteit",
        optionD: "Voor design",
        correctOption: "optionB"
    },
    {
        question: "Wat kan AI doen met stemmen?",
        optionA: "Alleen opnemen",
        optionB: "Realistisch nabootsen",
        optionC: "Alleen verwijderen",
        optionD: "Alleen versnellen",
        correctOption: "optionB"
    },
    {
        question: "Wat is een risico van deepfake audio?",
        optionA: "Slechte kwaliteit",
        optionB: "Misleiding met nepstemmen",
        optionC: "Geen geluid",
        optionD: "Grote bestanden",
        correctOption: "optionB"
    },
    {
        question: "Waarom is mediawijsheid belangrijk?",
        optionA: "Voor snelheid",
        optionB: "Voor opslag",
        optionC: "Voor kritisch denken",
        optionD: "Voor design",
        correctOption: "optionC"
    },
    {
        question: "Wat betekent verificatie van informatie?",
        optionA: "Opslaan",
        optionB: "Controleren op juistheid",
        optionC: "Verwijderen",
        optionD: "Versnellen",
        correctOption: "optionB"
    },
    {
        question: "Wat is een gevolg van nepnieuws?",
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
        question: "Wat moet je doen bij twijfel over nieuws?",
        optionA: "Direct delen",
        optionB: "Negeren",
        optionC: "Controleren en onderzoeken",
        optionD: "Opslaan",
        correctOption: "optionC"
    },
    {
        question: "Waarom kan bias in AI gevaarlijk zijn?",
        optionA: "AI is altijd neutraal",
        optionB: "Het kan misleidende output geven",
        optionC: "AI gebruikt geen data",
        optionD: "Bias bestaat niet",
        correctOption: "optionB"
    },
    {
        question: "Wat is een kenmerk van deepfake video?",
        optionA: "Altijd zwart Wit",
        optionB: "Alleen entertainment",
        optionC: "Realistische manipulatie",
        optionD: "Geen geluid",
        correctOption: "optionC"
    },
    {
        question: "Hoe kan AI nepnieuws versterken?",
        optionA: "Door content automatisch te genereren",
        optionB: "Door alleen feiten te tonen",
        optionC: "Door niets te doen",
        optionD: "Door nieuws te blokkeren",
        correctOption: "optionA"
    },
    {
        question: "Wat is Confirmation Bias?",
        optionA: "Alles onthouden",
        optionB: "Info geloven die je mening bevestigt",
        optionC: "Alle nieuws lezen",
        optionD: "AI vertrouwen",
        correctOption: "optionB"
    },
    {
        question: "Waarom beinvloeden algoritmes wat je ziet?",
        optionA: "Ze kiezen relevante content voor jou",
        optionB: "Ze verwijderen alles",
        optionC: "Ze maken internet sneller",
        optionD: "Ze blokkeren woorden",
        correctOption: "optionA"
    },
    {
        question: "Wat is een risico zonder menselijke controle bij AI?",
        optionA: "Kortere tekst",
        optionB: "Fouten of misleiding",
        optionC: "Geen woorden",
        optionD: "Niet deelbaar",
        correctOption: "optionB"
    },
    {
        question: "Hoe herken je mogelijke deepfake audio?",
        optionA: "Lengte controleren",
        optionB: "Onnatuurlijke patronen horen",
        optionC: "Bestandstype bekijken",
        optionD: "Titel lezen",
        correctOption: "optionB"
    },
    {
        question: "Wat is een Echo Chamber?",
        optionA: "Geluidsruimte",
        optionB: "Omgeving waar je dezelfde meningen blijft zien",
        optionC: "Technisch probleem",
        optionD: "Opslagruimte",
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