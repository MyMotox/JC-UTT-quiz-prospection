const questions = [
        {
        question: "Bienvenue au quiz de prospection de Junior Conseil UTT ! Prêt à tester vos connaissances ?",
        options: ["Oui, je suis prêt à devenir un expert en prospection !", "Non, je préfère rester dans l'ignorance éternelle."],
        correct: 0,
        video: "video0.mp4"
    },
    {
        question: "Pourquoi travailler avec une Junior plutôt qu'une entreprise classique ?",
        options: ["Parce que les Juniors sont légalement obligées de proposer les prix les plus bas du marché", "Pour bénéficier d'expertise technique actualisée et d'un cadre légal structuré", "Parce qu'une Junior peut réaliser des missions non réglementées par défaut", "Parce que les consultants sont secrètement des super-héros masqués"],
        correct: 1,
        video: "video1.mp4"
    },
    {
        question: "Combien de temps prend une mission ?",
        options: ["Toujours moins d'une semaine, car les projets étudiants sont rapides", "Toujours plus de six mois, même pour un petit script", "Le temps nécessaire à un escargot pour traverser l'UTT en moonwalk", "Entre quelques semaines et plusieurs mois selon le projet"],
        correct: 3,
        video: "video2.mp4"
    },
    {
        question: "Qui réalise la mission ?",
        options: ["Des étudiants sélectionnés pour leurs compétences, encadrés par le pôle suivi", "Les membres du bureau uniquement, quel que soit le domaine technique", "Des freelances externes recrutés pour la mission", "Un canard stagiaire équipé d'un clavier trop grand pour lui"],
        correct: 0,
        video: "video3.mp4"
    },
    {
        question: "Comment fonctionnent les conventions ?",
        options: ["Elles sont optionnelles pour les petites missions", "Elles ne concernent que les projets de plus de 10 JEH", "Elles définissent le cadre légal, les obligations, les livrables, et doivent être signées avant tout travail", "Elles sont gravées à la main sur des tablettes en granit par un druide"],
        correct: 2,
        video: "video4.mp4"
    },
    {
        question: "Quels types de projets réalisez-vous réellement ?",
        options: ["Uniquement du développement web", "Développement web, IA, mécanique, études, optimisation, modélisation etc.", "Uniquement des études de marché", "Construction de pyramides en carton biodégradable"],
        correct: 1,
        video: "video5.mp4"
    },
    {
        question: "Et si la mission se passe mal ?",
        options: ["La Junior intervient, ajuste, remplace l'intervenant si nécessaire, et assure le suivi", "Le client doit terminer la mission lui-même", "L'intervenant peut abandonner sans préavis", "On invoque l'esprit d'un ancien président de Junior pour arbitrer"],
        correct: 0,
        video: "video6.mp4"
    },
    {
        question: "Quels sont vos délais de réponse ?",
        options: ["Une réponse immédiate, quelle que soit la charge de travail", "Une réponse uniquement après validation par l'université", "Une réponse après un tirage au sort orchestré par le canard", " Généralement 48 à 72 heures pour une première réponse"],
        correct: 3,
        video: "video7.mp4"
    },
    {
        question: "Comment garantissez-vous la qualité ?",
        options: ["Par la sélection des intervenants, un cadrage précis, et un suivi régulier", "Par une vérification automatique faite par un logiciel externe", "Par un re-travail intégral du bureau, quel que soit le projet", "Par un rituel secret où l'on bénit le livrable avec un stabilo fluo"],
        correct: 0,
        video: "video8.mp4"
    },
    {
        question: "Quel est le prix moyen d'une mission ?",
        options: ["Un prix fixe identique pour toutes les missions, quel que soit le projet", "Un tarif uniquement basé sur le nombre d'intervenants, sans lien avec le travail réel", "Entre quelques centaines et quelques milliers d'euros, selon le volume horaire et la complexité", "Le montant exact dépend de la position de la lune et du niveau d'enthousiasme du canard"],
        correct: 2,
        video: "video9.mp4"
    },
    {
        question: "Y a-t-il de la maintenance ?",
        options: ["Oui, maintenance illimitée pendant 2 ans", "Non, mais il existe une période de garantie : 3 mois (technique) ou 1 mois (papier)", "Oui, mais uniquement si le client fournit son propre serveur", "Maintenance assurée par un hamster ingénieur certifié"],
        correct: 1,
        video: "video10.mp4"
    },
    {
        question: "Utilisez-vous l'IA pour faire les missions ?",
        options: ["L'IA peut aider, mais le travail réel est fait par l'intervenant", "Oui, toutes les missions sont automatisées", "Non, l'IA est interdite dans tous les projets", "Les missions sont confiées à une IA qui boit du café pour rester concentrée"],
        correct: 0,
        video: "video11.mp4"
    },
    {
        question: "Qu'est-ce qu'un JEH ?",
        options: ["Un diplôme nécessaire pour devenir intervenant", "Un outil interne réservé aux grands groupes", "Une mesure basée sur la distance qu'un étudiant peut parcourir avant de se fatiguer", "Une unité de facturation correspondant à un volume de travail standardisé"],
        correct: 3,
        video: "video12.mp4"
    },
    {
        question: "Avez-vous une obligation de résultat ?",
        options: ["Oui, la Junior garantit absolument tous les résultats", "Oui, uniquement pour les missions de plus de 5 JEH", "Non, c'est une obligation de moyens : mobilisation et suivi des compétences", "L'obligation dépend du taux d'humidité dans le bureau"],
        correct: 2,
        video: "video13.mp4"
    },
    {
        question: "Quelles seront les échéances de paiement ?",
        options: ["Paiement unique à la fin de la mission", "Acompte à la signature, solde à la livraison", "Paiement mensualisé obligatoire", "Paiement en tickets-restaurants déposés sous une pierre sacrée"],
        correct: 1,
        video: "video14.mp4"
    },
    {
        question: "À qui appartient la propriété intellectuelle ?",
        options: ["Au client une fois la mission livrée et réglée", "À l'intervenant, qui peut revendre le code", "À la Junior, quelle que soit la mission", "Au canard, qui conserve tous les droits musicaux associés"],
        correct: 0,
        video: "video15.mp4"
    },
    {
        question: "Applique-t-on des pénalités de retard ?",
        options: ["Oui, systématiquement pour chaque jour de dépassement", "Non, la Junior a une obligation de moyens et n'applique pas ces pénalités", "Oui, mais uniquement pour les missions de moins de 3 JEH", "Pénalité appliquée sous forme de gâteaux laissés devant le local"],
        correct: 1,
        video: "video16.mp4"
    }

];

let state = {
    currentQuestion: 0,
    score: 0,
    selectedAnswer: null,
    answered: false,
    firstLoad: true
};

document.addEventListener('DOMContentLoaded', () => {
    // Démarrer la musique de fond
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.volume = 0.3; // Volume à 30%
    
    // Tenter de démarrer la musique automatiquement
    backgroundMusic.play().catch(() => {
        // Si l'autoplay échoue, on démarre la musique au premier clic
        document.body.addEventListener('click', function startMusic() {
            backgroundMusic.play();
            document.body.removeEventListener('click', startMusic);
        }, { once: true });
    });
    
    startNewVideo();
});

function startNewVideo() {
    if (state.currentQuestion >= questions.length) {
        showFinalScore();
        return;
    }

    state.answered = false;
    state.selectedAnswer = null;

    // Cacher le quiz
    document.getElementById('quizSection').classList.remove('active');
    document.getElementById('finalSection').classList.remove('active');
    document.getElementById('videoQuestionOverlay').classList.remove('show');

    const video = document.getElementById('quizVideo');
    const videoSource = video.querySelector('source');
    const loadingText = document.getElementById('loadingText');
    const questionOverlay = document.getElementById('videoQuestionOverlay');
    const videoQuestionText = document.getElementById('videoQuestionText');

    video.style.display = 'none';
    loadingText.style.display = 'block';

    // Afficher la question dans l'overlay
    const currentQuestion = questions[state.currentQuestion];
    videoQuestionText.textContent = currentQuestion.question;

    // Charger la vidéo correspondante
    const currentVideoSrc = currentQuestion.video;
    videoSource.src = currentVideoSrc;
    video.load();

    // Lancer la vidéo
    setTimeout(() => {
        loadingText.style.display = 'none';
        video.style.display = 'block';
        video.currentTime = 0;
        
        if (!state.firstLoad) {
            video.muted = false;
        }
        state.firstLoad = false;
        
        video.play().catch(err => {
            console.log('Autoplay échoué:', err);
            video.muted = false;
            video.play();
        });

        // Afficher la question après 1 seconde
        setTimeout(() => {
            questionOverlay.classList.add('show');
        }, 1000);
    }, 300);

    // Écoute la fin de la vidéo
    video.onended = () => {
        // Masquer l'overlay de question
        questionOverlay.classList.remove('show');
        // Afficher le quiz avec les options
        setTimeout(() => {
            showQuiz();
        }, 500);
    };
}

function showQuiz() {
    document.getElementById('quizSection').classList.add('active');
    loadQuestion();
}

function loadQuestion() {
    const question = questions[state.currentQuestion];

    document.getElementById('questionInfo').textContent = 
        `Question ${state.currentQuestion + 1}/${questions.length}`;

    document.getElementById('questionText').textContent = question.question;

    // Affiche les options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionElement);
    });

    // Déclenche les animations en décalé
    setTimeout(() => {
        const options = document.querySelectorAll('.option');
        options.forEach((opt, index) => {
            setTimeout(() => {
                opt.classList.add('animated');
            }, (index + 1) * 200);
        });
    }, 0);

    // Réinitialise l'affichage
    document.getElementById('feedback').classList.remove('show');
    document.getElementById('submitBtn').style.display = 'flex';
    document.getElementById('nextBtn').style.display = 'none';
}

function selectOption(index) {
    if (state.answered) return;

    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    document.querySelectorAll('.option')[index].classList.add('selected');
    state.selectedAnswer = index;
}

function submitAnswer() {
    if (state.selectedAnswer === null) {
        alert('Veuillez sélectionner une réponse');
        return;
    }

    state.answered = true;

    const question = questions[state.currentQuestion];
    const isCorrect = state.selectedAnswer === question.correct;

    // Affiche la réponse correcte
    const options = document.querySelectorAll('.option');
    options.forEach((opt, index) => {
        opt.classList.remove('selected');
        if (index === question.correct) {
            opt.classList.add('correct');
        } else if (index === state.selectedAnswer && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });

    // Affiche le feedback
    const feedback = document.getElementById('feedback');
    feedback.classList.add('show');

    if (isCorrect) {
        feedback.classList.add('correct');
        feedback.classList.remove('incorrect');
        feedback.textContent = '✓ Correct!';
        state.score += 1;
    } else {
        feedback.classList.add('incorrect');
        feedback.classList.remove('correct');
        feedback.textContent = '✗ Incorrect. La bonne réponse: ' + question.options[question.correct];
    }

    document.getElementById('scoreValue').textContent = state.score;

    // Affiche le bouton suivant
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'block';
}

function nextQuestion() {
    state.currentQuestion++;

    if (state.currentQuestion >= questions.length) {
        document.getElementById('quizSection').classList.remove('active');
        showFinalScore();
    } else {
        startNewVideo();
    }
}

function showFinalScore() {
    document.getElementById('quizSection').classList.remove('active');
    document.getElementById('finalSection').classList.add('active');

    document.getElementById('finalScore').textContent = state.score + '/' + questions.length;

    // Calcule le pourcentage
    const percentage = (state.score / questions.length) * 100;
    
    let message = '';
    if (percentage === 100) {
        message = 'Parfait! Vous avez tout réussi! 🎉 Vous êtes un vrai prospecteur!';
    } else if (percentage >= 75) {
        message = 'Excellent! Très bon score! 👍 Vous maîtrisez bien le sujet!';
    } else if (percentage >= 50) {
        message = 'Bien joué! 😊 Vous avez des bonnes connaissances!';
    } else if (percentage >= 25) {
        message = 'Pas mal! 💪 Continuez vos efforts!';
    } else {
        message = 'À bientôt pour un nouvel essai! 🎓 Vous pouvez réussir!';
    }

    document.getElementById('finalMessage').textContent = message;
}

function restartQuiz() {
    state = {
        currentQuestion: 0,
        score: 0,
        selectedAnswer: null,
        answered: false,
        firstLoad: true
    };

    document.getElementById('scoreValue').textContent = '0';
    startNewVideo();
}

function restartQuiz() {
    state = {
        currentQuestion: 0,
        score: 0,
        selectedAnswer: null,
        answered: false,
        firstLoad: true
    };

    document.getElementById('scoreValue').textContent = '0';
    startNewVideo();
}

function shareResult(event) {
    const percentage = (state.score / questions.length) * 100;
    const scoreText = `${state.score}/${questions.length}`;
    
    let emoji = '';
    if (percentage === 100) {
        emoji = '🎉';
    } else if (percentage >= 75) {
        emoji = '👍';
    } else if (percentage >= 50) {
        emoji = '😊';
    } else if (percentage >= 25) {
        emoji = '💪';
    } else {
        emoji = '🎓';
    }
    
    const shareText = `J'ai fait ${scoreText} au Quiz Prospection JC-UTT ! ${emoji}\n\nÀ ton tour de tester tes connaissances :\nhttps://votre-site-quiz.com`;
    
    // Feedback visuel immédiat
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ Copié !';
    btn.style.background = '#2e7d32';
    
    // Tenter de copier dans le presse-papier
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareText).catch(() => {
            // Même en cas d'erreur, on garde le message "Copié"
            console.log('Clipboard API échouée, texte préparé');
        });
    } else {
        // Fallback pour navigateurs anciens : créer un textarea temporaire
        const textarea = document.createElement('textarea');
        textarea.value = shareText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.log('Copie échouée');
        }
        document.body.removeChild(textarea);
    }
    
    // Réinitialiser le bouton après 2 secondes
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '#4caf50';
    }, 2000);
}