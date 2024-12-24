const questions = [
    {
        question: "Ah ! Tu viens de trouver ce site et tu veux récuperer ton cadeau ?<br>Ouais.. je comprends 💛<br><br>Mais tu te doutes bien que je vais d'abord devoir vérifier ton identité.<br>L'idée va être de pouvoir prouver que tu es bien M.<br>Tu vas donc devoir réussir à atteindre la fin de ce quiz en moins de 3 fautes.<br><br>Si tu dois écrire une réponse, elle sera toujours en CHIFFRE ou LETTRE MINUSCULE SANS ESPACE.<br>Example : 48, noixdecoco, etc.<br><br>Si tu es bien M ca devrait n'être qu'une simple formalité. 🙂‍↕️<br><br>Écris \"letsgo\" pour lancer le quiz !",
        options: null,
        correct: "letsgo",
        image: "images/cerf.png"
    },
    {
        question: "Comment s'appelle la petite bête dans Nausicaä ?",
        options: ["Teto", "Teta", "Tita", "Tata"],
        correct: "Teta",
        image: "images/teto.webp"
    },
    {
        question: "A quoi etait les crêpes dégustée sur le col de la Forclaz ? sucre et ... ",
        options: ["Creme de marron", "Miel", "Beurre de cacahuete"],
        correct: "Beurre de cacahuete",
        image: "images/cerf.png"
    },
    {
        question: "Qu'est-ce qui bouge vite dans le ciel la nuit ? 👀",
        options: ["Les étoiles", "Les satellites", "Les nuages"],
        correct: "Les nuages",
        image: "images/cerf.png"
    },
    {
        question: "Que fais antibiotique quand il croise biotique ?",
        options: ["Il le choppe par le colback", "Il le choppe par les hanches", "Il lui prépare une petite tisane"],
        correct: "Il le choppe par le colback",
        image: "images/cerf.png"
    },
    {
        question: "C'est qui Philippe ?",
        options: ["Une crème", "Un ex", "Le mec du bus"],
        correct: "Une crème",
        image: "images/cerf.png"
    },
    {
        question: "Quelle est la faiblesse d'une G310 en usage auto-école ?",
        options: ["Le démarreur", "Le siège inconfortable", "Le moteur"],
        correct: "Le démarreur",
        image: "images/cerf.png"
    },
    {
        question: "Admettons qu'un bel homme ai des trous dans son radius, combien il en aurait ?",
        options: null,
        correct: "9",
        image: "images/cerf.png"
    },
    {
        question: "Sur le poignet gauche ou droit ?",
        options: ["Gauche", "Droit"],
        correct: "Gauche",
        image: "images/cerf.png"
    },
    {
        question: "Combien de fois me suis-je brossé les dents en novembre ?",
        options: ["Pas assez", "Trop", "9 dentistes sur 10 recommandent mes habitudes de brossage."],
        correct: "9 dentistes sur 10 recommandent mes habitudes de brossage.",
        image: "images/cerf.png"
    },
    {
        question: "Dans quel maison suis-je à Poudlard ?",
        options: ["Poufsouffle", "Gryffondor", "Serdaigle", "Serpentard"],
        correct: "Poufsouffle",
        image: "images/cerf.png"
    },
    {
        question: "Combien de temps dure ta douche idéale ?",
        options: ["10s", "5m", "10m"],
        correct: "10s",
        image: "images/cerf.png"
    },
    {
        question: "J'arrête de me sécher quand :",
        options: ["Je ruisselle d'eau sur absolument toutes les surfaces de la salle de bain", "Je suis légèrement humide", "Je suis sec"],
        correct: "Je ruisselle d'eau sur absolument toutes les surfaces de la salle de bain",
        image: "images/cerf.png"
    },
    {
        question: "De quelle couleur etait ton ecole de bachelor ?",
        options: ["Vert", "Orange", "Gris", "Blanc"],
        correct: "Orange",
        image: "images/cerf.png"
    },
    {
        question: "Team",
        options: ["Edward", "Jacob", "Charly"],
        correct: "Charly",
        image: "images/cerf.png"
    },
    {
        question: "Combien de temps faut-il cuire les courgettes au four",
        options: ["20m", "30m", "40m", "jusqu'à quasi disparition"],
        correct: "jusqu'à quasi disparition",
        image: "images/cerf.png"
    },
    {
        question: "Je fais des appels de feu stop",
        options: ["Oui", "Oui", "Oui"],
        correct: "Oui",
        image: "images/cerf.png"
    },
    {
        question: "Je klaxonne",
        options: ["tg", "tg", "tg", "tg"],
        correct: "tg",
        image: "images/cerf.png"
    },
    {
        question: "Le panneau 30 au dessus ou au dessous",
        options: ["alors la", "je vais m'énerver", "Je suis un nerveux"],
        correct: "Je suis un nerveux",
        image: "images/cerf.png"
    },
    {
        question: "Je souhaite découper sans encombre mes aliments en 2024 grâce à un couteau révolutionaire, j'utilise :",
        options: ["Matsato", "Matsito", "Matsuto"],
        correct: "Matsato",
        image: "images/cerf.png"
    },
    // {
    //     question: "",
    //     options: ["bla", "bla", "bla", "bla"],
    //     correct: "bla",
    //     image: "images/cerf.png"
    // },
    // {
    //     question: "bla",
    //     options: ["bla", "bla", "bla", "bla"],
    //     correct: "bla",
    //     image: "images/cerf.png"
    // },
    // {
    //     question: "bla",
    //     options: ["bla", "bla", "bla", "bla"],
    //     correct: "bla",
    //     image: "images/cerf.png"
    // },
    // {
    //     question: "bla",
    //     options: ["bla", "bla", "bla", "bla"],
    //     correct: "bla",
    //     image: "images/cerf.png"
    // },
    // {
    //     question: "bla",
    //     options: ["bla", "bla", "bla", "bla"],
    //     correct: "bla",
    //     image: "images/cerf.png"
    // },
    {
        question: "Ou est caché ton cadeau ?",
        options: ["dans le canapé", "vraiment dans le canapé", "Tu as regardé dans le canapé ?", "Nan mais vraiment, regarde dans le canapé", "La bonne réponse c'est celle la, oublie pas de finir le quiz 😗"],
        correct: "La bonne réponse c'est celle la, oublie pas de finir le quiz 😗",
        image: "images/cerf.png"
    }
];

let currentQuestionIndex = 0;
let mistakes = 0; // Compteur d'erreurs

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const choicesContainer = document.getElementById('choices');
    const inputContainer = document.getElementById('input-container');
    const validateButton = document.getElementById('validate-btn');
    const skipButton = document.getElementById('skip-btn'); // Bouton "Passer la question"
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');
    const answerInput = document.getElementById('answer');

    // Reset results and input
    resultElement.textContent = '';
    errorElement.textContent = '';
    choicesContainer.innerHTML = '';
    inputContainer.style.display = 'none'; // Masque le champ de saisie par défaut
    validateButton.style.display = 'none';
    skipButton.style.display = 'none'; // Masque le bouton "Passer la question" par défaut

    // Get current question
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    // Update background image
    document.body.style.backgroundImage = `url('${currentQuestion.image}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";

    if (currentQuestion.options) {
        // Affiche les boutons de choix multiples
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('choice-btn');
            button.addEventListener('click', () => validateAnswer(option));
            choicesContainer.appendChild(button);
        });
    } else {
        // Affiche le champ de saisie
        inputContainer.style.display = 'block';
        validateButton.style.display = 'inline-block';

        // Associe l'action au bouton "Valider"
        validateButton.onclick = () => {
            const userAnswer = answerInput.value.trim();
            validateAnswer(userAnswer);
        };

        // Affiche le bouton "Passer la question"
        skipButton.style.display = 'inline-block';
        skipButton.onclick = skipQuestion;
    }
}

function skipQuestion() {
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');

    // Réinitialiser les messages et passer à la question suivante
    resultElement.textContent = '';
    errorElement.textContent = '';
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        const finalMessage = document.getElementById('final-message');
        finalMessage.style.display = 'block';
        document.getElementById('choices').innerHTML = '';
        document.getElementById('question').textContent = '';
    }
}


function validateAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');
    const answerInput = document.getElementById('answer');

    if (selectedOption === currentQuestion.correct) {
        resultElement.textContent = 'Bonne réponse !';
        errorElement.textContent = '';
        answerInput.value = ''; // Réinitialise le champ de saisie

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                const finalMessage = document.getElementById('final-message');
                finalMessage.style.display = 'block';
                resultElement.textContent = '';
                document.getElementById('choices').innerHTML = '';
                document.getElementById('question').textContent = '';
            }
        }, 1000);
    } else {
        // Mauvaise réponse
        mistakes++; // Incrémenter le compteur d'erreurs
        errorElement.textContent = `Mauvaise réponse. Vous avez fait ${mistakes} faute(s).`;

        if (mistakes >= 3) {
            // Trop d'erreurs : recommencer
            alert("Vous avez fait plus de 3 erreurs. Le quiz va recommencer.");
            restartQuiz();
        }

        resultElement.textContent = '';
    }
}

function restartQuiz() {
    mistakes = 0; // Réinitialiser le compteur d'erreurs
    currentQuestionIndex = 0; // Revenir à la première question
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');
    const finalMessage = document.getElementById('final-message');

    // Réinitialiser les messages
    resultElement.textContent = '';
    errorElement.textContent = '';
    finalMessage.style.display = 'none';

    // Relancer le quiz
    displayQuestion();
}




// Démarrage du quiz
displayQuestion();
