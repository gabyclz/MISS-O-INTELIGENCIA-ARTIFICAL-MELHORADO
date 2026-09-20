// ============================================
// MISS-O INTELIGÊNCIA
// PROJETO 2049
// ============================================


// ===============================
// PERGUNTAS
// ===============================

const questions = [

    {
        question: "Em 2049, uma inteligência artificial começa a tomar decisões importantes. O que você faria?",

        answers: [
            {
                text: "Criaria regras para manter os humanos no controle.",
                points: 3,
                type: "LIDER"
            },
            {
                text: "Deixaria a IA decidir tudo.",
                points: 1,
                type: "TECNOLOGICO"
            },
            {
                text: "Trabalharia junto com a IA.",
                points: 4,
                type: "EQUILIBRIO"
            },
            {
                text: "Desconectaria a inteligência artificial.",
                points: 2,
                type: "HUMANO"
            }
        ]
    },


    {
        question: "Uma nova tecnologia pode solucionar um grande problema ambiental. Qual seria sua escolha?",

        answers: [
            {
                text: "Investiria imediatamente na tecnologia.",
                points: 4,
                type: "FUTURISTA"
            },
            {
                text: "Testaria cuidadosamente antes.",
                points: 3,
                type: "EQUILIBRIO"
            },
            {
                text: "Esperaria outras pessoas testarem.",
                points: 2,
                type: "CAUTELOSO"
            },
            {
                text: "Preferiria soluções tradicionais.",
                points: 1,
                type: "HUMANO"
            }
        ]
    },


    {
        question: "As cidades de 2049 estão completamente conectadas. Qual seria sua prioridade?",

        answers: [
            {
                text: "Privacidade das pessoas.",
                points: 4,
                type: "HUMANO"
            },
            {
                text: "Tecnologia e eficiência.",
                points: 3,
                type: "TECNOLOGICO"
            },
            {
                text: "Segurança.",
                points: 3,
                type: "LIDER"
            },
            {
                text: "Liberdade total.",
                points: 2,
                type: "FUTURISTA"
            }
        ]
    },


    {
        question: "Você recebe acesso a uma tecnologia capaz de prever acontecimentos. O que faria?",

        answers: [
            {
                text: "Usaria para ajudar as pessoas.",
                points: 4,
                type: "HUMANO"
            },
            {
                text: "Usaria apenas em situações importantes.",
                points: 3,
                type: "EQUILIBRIO"
            },
            {
                text: "Tentaria descobrir tudo sobre o futuro.",
                points: 2,
                type: "FUTURISTA"
            },
            {
                text: "Destruiria a tecnologia.",
                points: 1,
                type: "CAUTELOSO"
            }
        ]
    },


    {
        question: "Qual seria o maior valor da sociedade em 2049?",

        answers: [
            {
                text: "Conhecimento.",
                points: 4,
                type: "TECNOLOGICO"
            },
            {
                text: "Liberdade.",
                points: 4,
                type: "HUMANO"
            },
            {
                text: "Cooperação.",
                points: 4,
                type: "EQUILIBRIO"
            },
            {
                text: "Inovação.",
                points: 4,
                type: "FUTURISTA"
            }
        ]
    },


    {
        question: "Uma missão espacial precisa de alguém para liderar a equipe. O que você faria?",

        answers: [
            {
                text: "Assumiria a liderança.",
                points: 4,
                type: "LIDER"
            },
            {
                text: "Ajudaria nos bastidores.",
                points: 3,
                type: "EQUILIBRIO"
            },
            {
                text: "Deixaria outra pessoa liderar.",
                points: 2,
                type: "HUMANO"
            },
            {
                text: "Deixaria a IA escolher.",
                points: 1,
                type: "TECNOLOGICO"
            }
        ]
    },


    {
        question: "Uma cidade futurista oferece uma vida totalmente automatizada. Você escolheria:",

        answers: [
            {
                text: "Automação completa.",
                points: 4,
                type: "TECNOLOGICO"
            },
            {
                text: "Automação apenas quando necessária.",
                points: 4,
                type: "EQUILIBRIO"
            },
            {
                text: "Pouca tecnologia.",
                points: 2,
                type: "HUMANO"
            },
            {
                text: "Uma sociedade experimental.",
                points: 3,
                type: "FUTURISTA"
            }
        ]
    },


    {
        question: "Você encontra uma tecnologia desconhecida. Qual sua primeira reação?",

        answers: [
            {
                text: "Quero descobrir como funciona.",
                points: 4,
                type: "FUTURISTA"
            },
            {
                text: "Vou pesquisar antes.",
                points: 4,
                type: "CAUTELOSO"
            },
            {
                text: "Vou pedir ajuda.",
                points: 3,
                type: "EQUILIBRIO"
            },
            {
                text: "Prefiro não mexer.",
                points: 2,
                type: "HUMANO"
            }
        ]
    },


    {
        question: "Se você pudesse mudar uma coisa no mundo de 2049, o que escolheria?",

        answers: [
            {
                text: "A educação.",
                points: 4,
                type: "HUMANO"
            },
            {
                text: "A tecnologia.",
                points: 4,
                type: "TECNOLOGICO"
            },
            {
                text: "O meio ambiente.",
                points: 4,
                type: "EQUILIBRIO"
            },
            {
                text: "A exploração espacial.",
                points: 4,
                type: "FUTURISTA"
            }
        ]
    }

];


// ===============================
// VARIÁVEIS
// ===============================

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const typePoints = {};


// ===============================
// ELEMENTOS
// ===============================

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionNumber = document.getElementById("question-number");
const questionTitle = document.getElementById("question-title");
const answersContainer = document.getElementById("answers");

const progressBar = document.getElementById("progress-bar");

const scoreElement = document.getElementById("score");

const aiMessage = document.getElementById("ai-message");


// ===============================
// TROCAR TELA
// ===============================

function showScreen(screen) {

    document.querySelectorAll(".screen").forEach(item => {
        item.classList.remove("active");
    });

    screen.classList.add("active");
}


// ===============================
// INICIAR
// ===============================

startBtn.addEventListener("click", () => {

    currentQuestion = 0;
    score = 0;

    for (let key in typePoints) {
        delete typePoints[key];
    }

    scoreElement.textContent = "0";

    showScreen(quizScreen);

    loadQuestion();

});


// ===============================
// CARREGAR PERGUNTA
// ===============================

function loadQuestion() {

    selectedAnswer = null;

    nextBtn.disabled = true;
    nextBtn.classList.remove("enabled");

    const question = questions[currentQuestion];

    questionNumber.textContent =
        `PERGUNTA ${String(currentQuestion + 1).padStart(2, "0")}`;

    questionTitle.textContent = question.question;

    progressBar.style.width =
        `${(currentQuestion / questions.length) * 100}%`;

    answersContainer.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent = answer.text;

        button.addEventListener("click", () => {

            selectAnswer(button, answer);

        });

        answersContainer.appendChild(button);

    });


    updateAI();
}


// ===============================
// SELECIONAR RESPOSTA
// ===============================

function selectAnswer(button, answer) {

    document.querySelectorAll(".answer").forEach(item => {
        item.classList.remove("selected");
    });

    button.classList.add("selected");

    selectedAnswer = answer;

    nextBtn.disabled = false;
    nextBtn.classList.add("enabled");

    aiMessage.textContent = getAIReaction(answer.type);

}


// ===============================
// FRASES DA IA
// ===============================

function getAIReaction(type) {

    const messages = {

        LIDER:
            "Interessante... você parece confortável assumindo responsabilidades. 🤖",

        TECNOLOGICO:
            "Você demonstra bastante confiança na tecnologia. 💙",

        EQUILIBRIO:
            "Uma escolha equilibrada. Talvez esse seja um dos maiores desafios de 2049. ✨",

        HUMANO:
            "Você colocou as pessoas no centro da decisão. Isso diz bastante sobre sua visão de futuro. 🌎",

        FUTURISTA:
            "Você não parece ter medo do desconhecido. O futuro acabou de ficar mais interessante. 🚀",

        CAUTELOSO:
            "Você prefere entender as consequências antes de agir. Uma estratégia cuidadosa. 🔎"

    };

    return messages[type] || "Escolha registrada. Continuando a missão...";
}


// ===============================
// PRÓXIMA PERGUNTA
// ===============================

nextBtn.addEventListener("click", () => {

    if (!selectedAnswer) return;


    score += selectedAnswer.points;

    scoreElement.textContent = score;


    if (!typePoints[selectedAnswer.type]) {
        typePoints[selectedAnswer.type] = 0;
    }

    typePoints[selectedAnswer.type] += selectedAnswer.points;


    currentQuestion++;


    if (currentQuestion >= questions.length) {

        finishQuiz();

    } else {

        loadQuestion();

    }

});


// ===============================
// RESULTADO
// ===============================

function finishQuiz() {

    progressBar.style.width = "100%";

    setTimeout(() => {

        showScreen(resultScreen);

        generateResult();

        createConfetti();

    }, 500);

}


// ===============================
// GERAR RESULTADO
// ===============================

function generateResult() {

    document.getElementById("final-score").textContent =
        score;


    let dominantType = "EQUILIBRIO";
    let highest = 0;

    for (let type in typePoints) {

        if (typePoints[type] > highest) {

            highest = typePoints[type];

            dominantType = type;

        }

    }


    const results = {

        LIDER: {
            title: "A ESTRATEGISTA",
            description:
                "Suas escolhas mostram uma tendência a assumir responsabilidades e pensar nas consequências das decisões.",
            story:
                "Em 2049, você se tornou uma das pessoas responsáveis por tomar decisões importantes em uma sociedade cada vez mais tecnológica. Seu maior desafio não era controlar o futuro, mas aprender a liderar pessoas e inteligências artificiais lado a lado."
        },

        TECNOLOGICO: {
            title: "A ARQUITETA DIGITAL",
            description:
                "Você demonstrou grande confiança no potencial da tecnologia.",
            story:
                "Em 2049, você trabalhava em uma das maiores cidades inteligentes do planeta. Sistemas de inteligência artificial faziam parte da rotina, e você ajudava a criar novas soluções para transformar problemas antigos em possibilidades."
        },

        EQUILIBRIO: {
            title: "A PONTE ENTRE DOIS MUNDOS",
            description:
                "Suas escolhas buscaram equilibrar inovação, segurança e humanidade.",
            story:
                "Em 2049, você ficou conhecida por defender uma ideia simples: tecnologia deveria trabalhar com as pessoas, não substituir aquilo que torna a humanidade única. Sua missão era conectar dois mundos."
        },

        HUMANO: {
            title: "A GUARDIÃ DA HUMANIDADE",
            description:
                "Suas escolhas colocaram pessoas, liberdade e valores humanos em primeiro plano.",
            story:
                "Em 2049, enquanto máquinas ficavam cada vez mais inteligentes, você trabalhava para garantir que as pessoas não fossem esquecidas. Sua maior contribuição foi lembrar ao mundo que progresso também precisa ter humanidade."
        },

        FUTURISTA: {
            title: "A EXPLORADORA DO AMANHÃ",
            description:
                "Você demonstrou curiosidade, coragem e interesse pelo desconhecido.",
            story:
                "Em 2049, você fazia parte de uma geração que olhava para além da Terra. Novas tecnologias, cidades espaciais e descobertas estavam apenas começando. E você estava determinada a descobrir o que existia depois do horizonte."
        },

        CAUTELOSO: {
            title: "A ANALISTA DO FUTURO",
            description:
                "Você mostrou preferência por analisar as consequências antes de tomar grandes decisões.",
            story:
                "Em 2049, sua habilidade de observar antes de agir se tornou extremamente valiosa. Enquanto muitos corriam atrás das novas tecnologias, você analisava riscos e ajudava a construir um futuro mais seguro."
        }

    };


    const result = results[dominantType];


    document.getElementById("result-title").textContent =
        result.title;

    document.getElementById("result-description").textContent =
        result.description;

    document.getElementById("story").textContent =
        result.story;

}


// ===============================
// REINICIAR
// ===============================

restartBtn.addEventListener("click", () => {

    showScreen(startScreen);

});


// ===============================
// CONFETES
// ===============================

function createConfetti() {

    const container = document.getElementById("confetti");

    container.innerHTML = "";

    for (let i = 0; i < 100; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        piece.style.background =
            `hsl(${190 + Math.random() * 60}, 100%, 60%)`;

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        container.appendChild(piece);

    }

}


// ===============================
// IA DURANTE AS PERGUNTAS
// ===============================

function updateAI() {

    const messages = [

        "Analise cuidadosamente. Sua escolha vai fazer parte da sua história de 2049. 🤖",

        "Não existe resposta certa ou errada. Quero descobrir como você imagina o futuro. ✨",

        "Interessante... essa decisão pode mudar o rumo da sua história. 👀",

        "O futuro está sendo construído escolha por escolha. Continue. 🚀",

        "Estou registrando sua visão de mundo para o relatório final. 💙"

    ];

    aiMessage.textContent =
        messages[currentQuestion % messages.length];

}


// ============================================
// FUNDO DE PARTÍCULAS
// ============================================

const canvas = document.getElementById("particles");

const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


for (let i = 0; i < 120; i++) {

    particles.push({

        x: Math.random() * window.innerWidth,

        y: Math.random() * window.innerHeight,

        size: Math.random() * 2 + 0.5,

        speedX: (Math.random() - 0.5) * 0.4,

        speedY: (Math.random() - 0.5) * 0.4,

        opacity: Math.random()

    });

}


function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(p => {

        p.x += p.speedX;
        p.y += p.speedY;


        if (p.x < 0) p.x = canvas.width;

        if (p.x > canvas.width) p.x = 0;

        if (p.y < 0) p.y = canvas.height;

        if (p.y > canvas.height) p.y = 0;


        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            `rgba(80, 200, 255, ${p.opacity})`;

        ctx.fill();

    });


    requestAnimationFrame(animateParticles);

}

animateParticles();