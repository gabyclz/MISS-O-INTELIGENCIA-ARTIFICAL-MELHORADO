const intro = document.querySelector("#intro");
const jogo = document.querySelector("#jogo");
const resultado = document.querySelector("#resultado");

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");

const contador = document.querySelector("#contador");
const fase = document.querySelector("#fase");
const barraProgresso = document.querySelector("#barra-progresso");

const textoResultado = document.querySelector(".texto-resultado");
const tituloResultado = document.querySelector("#titulo-resultado");
const perfil = document.querySelector("#perfil");

const perguntas = [

    {
        enunciado: "Você encontra uma IA capaz de criar textos, imagens e músicas em segundos. Qual é sua primeira reação?",

        alternativas: [
            {
                texto: "🤩 Quero testar tudo! Onde eu começo?",
                tipo: "explorador",
                afirmacao: "Você abraçou a novidade e começou a experimentar a IA com curiosidade."
            },

            {
                texto: "🧐 Calma... primeiro quero entender seus limites.",
                tipo: "critico",
                afirmacao: "Você decidiu conhecer a tecnologia antes de confiar nela."
            }
        ]
    },

    {
        enunciado: "Um trabalho da escola está atrasado. A IA pode ajudar. O que você faz?",

        alternativas: [
            {
                texto: "💡 Uso a IA para ter ideias, entender o assunto e depois faço minha parte.",
                tipo: "equilibrado",
                afirmacao: "Você usou a IA como parceira de estudo, sem deixar seu próprio pensamento de lado."
            },

            {
                texto: "⚡ Mando a IA fazer tudo para terminar rapidinho.",
                tipo: "dependente",
                afirmacao: "Você descobriu que rapidez nem sempre significa aprendizado e começou a repensar sua relação com a IA."
            }
        ]
    },

    {
        enunciado: "Você recebe uma imagem muito realista de uma celebridade fazendo algo estranho. O que faz antes de compartilhar?",

        alternativas: [
            {
                texto: "🔎 Procuro a origem e confirmo se é verdadeira.",
                tipo: "critico",
                afirmacao: "Você verificou a origem da imagem e evitou cair em uma possível criação de IA."
            },

            {
                texto: "📲 Compartilho porque parece muito real.",
                tipo: "impulsivo",
                afirmacao: "Você percebeu que uma imagem convincente pode enganar e passou a conferir melhor o que aparece na internet."
            }
        ]
    },

    {
        enunciado: "Uma amiga pede ajuda para estudar matemática. Como a IA entra nessa missão?",

        alternativas: [
            {
                texto: "🧠 Peço uma explicação passo a passo e tento resolver sozinha.",
                tipo: "equilibrado",
                afirmacao: "Você descobriu uma forma de usar a IA para aprender, e não apenas para receber respostas."
            },

            {
                texto: "🤖 Peço só as respostas para acabar logo.",
                tipo: "dependente",
                afirmacao: "Você percebeu que respostas prontas não substituem o processo de aprender."
            }
        ]
    },

    {
        enunciado: "Na sua futura profissão, uma IA consegue realizar uma tarefa que antes levava horas. Qual atitude combina mais com você?",

        alternativas: [
            {
                texto: "🚀 Aprendo a usar a ferramenta e penso em tarefas novas que ela pode facilitar.",
                tipo: "explorador",
                afirmacao: "Você transformou a tecnologia em uma oportunidade para criar novas soluções."
            },

            {
                texto: "⚖️ Uso a IA, mas mantenho pessoas revisando decisões importantes.",
                tipo: "critico",
                afirmacao: "Você ajudou a construir um ambiente em que tecnologia e responsabilidade caminham juntas."
            }
        ]
    },

    {
        enunciado: "A IA escreve um texto ótimo para sua apresentação, mas você não sabe se as informações estão certas. E agora?",

        alternativas: [
            {
                texto: "📚 Comparo com fontes confiáveis antes de usar.",
                tipo: "critico",
                afirmacao: "Você criou o hábito de verificar informações antes de confiar em uma resposta de IA."
            },

            {
                texto: "👍 Se ficou bem escrito, deve estar certo.",
                tipo: "impulsivo",
                afirmacao: "Você aprendeu que uma resposta bem escrita também pode conter erros."
            }
        ]
    },

    {
        enunciado: "Sua escola quer criar regras para o uso de IA. O que você defenderia?",

        alternativas: [
            {
                texto: "💬 Regras claras para usar IA como apoio, sem substituir o aprendizado.",
                tipo: "equilibrado",
                afirmacao: "Você ajudou a criar regras que incentivam inovação sem abandonar a responsabilidade."
            },

            {
                texto: "🛑 Proibir completamente qualquer uso de IA.",
                tipo: "conservador",
                afirmacao: "Você percebeu que entender e orientar o uso da tecnologia pode ser mais útil do que simplesmente ignorá-la."
            }
        ]
    },

    {
        enunciado: "Você descobre que uma IA pode ajudar uma empresa a tomar decisões. Qual seria sua preocupação principal?",

        alternativas: [
            {
                texto: "🔐 Privacidade e segurança dos dados das pessoas.",
                tipo: "critico",
                afirmacao: "Você colocou privacidade e segurança no centro das decisões tecnológicas."
            },

            {
                texto: "💰 Fazer tudo ficar mais rápido e barato.",
                tipo: "explorador",
                afirmacao: "Você buscou maneiras de usar a tecnologia para tornar processos mais eficientes."
            }
        ]
    },

    {
        enunciado: "Em 2049, você recebe a chance de criar uma nova tecnologia com IA. O que ela deveria fazer?",

        alternativas: [
            {
                texto: "🌱 Resolver problemas reais e melhorar a vida das pessoas.",
                tipo: "equilibrado",
                afirmacao: "Você escolheu colocar a tecnologia a serviço de problemas reais e das pessoas."
            },

            {
                texto: "✨ Fazer algo completamente novo, mesmo que ninguém tenha pensado nisso.",
                tipo: "explorador",
                afirmacao: "Sua criatividade levou a IA para caminhos que ninguém tinha imaginado."
            }
        ]
    },

    {
        enunciado: "Última missão: qual frase representa melhor sua relação com a Inteligência Artificial?",

        alternativas: [
            {
                texto: "🤝 A IA é uma ferramenta. Quem decide como usá-la somos nós.",
                tipo: "equilibrado",
                afirmacao: "Você entendeu que o futuro da IA depende das escolhas humanas."
            },

            {
                texto: "🌌 O futuro é imprevisível — então vamos descobrir!",
                tipo: "explorador",
                afirmacao: "Você escolheu encarar o futuro com curiosidade, criatividade e coragem."
            }
        ]
    }
];

let atual = 0;
let historiaFinal = "";

let pontos = {
    explorador: 0,
    critico: 0,
    equilibrado: 0,
    dependente: 0,
    impulsivo: 0,
    conservador: 0
};


function iniciarJogo() {

    intro.classList.add("escondido");
    resultado.classList.add("escondido");
    jogo.classList.remove("escondido");

    atual = 0;
    historiaFinal = "";

    pontos = {
        explorador: 0,
        critico: 0,
        equilibrado: 0,
        dependente: 0,
        impulsivo: 0,
        conservador: 0
    };

    mostraPergunta();
}


function mostraPergunta() {

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];

    contador.textContent = `${atual + 1} / ${perguntas.length}`;

    fase.textContent =
        `MISSÃO ${String(atual + 1).padStart(2, "0")}`;

    caixaPerguntas.textContent =
        perguntaAtual.enunciado;

    caixaAlternativas.innerHTML = "";

    barraProgresso.style.width =
        `${((atual + 1) / perguntas.length) * 100}%`;


    perguntaAtual.alternativas.forEach((alternativa) => {

        const botao = document.createElement("button");

        botao.className = "alternativa";

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {

            respostaSelecionada(
                alternativa,
                botao
            );

        });

        caixaAlternativas.appendChild(botao);
    });
}


function respostaSelecionada(opcao, botaoEscolhido) {

    const botoes =
        document.querySelectorAll(".alternativa");

    botoes.forEach((botao) => {
        botao.disabled = true;
    });

    botaoEscolhido.classList.add("selecionada");

    pontos[opcao.tipo]++;

    historiaFinal +=
        opcao.afirmacao + " ";

    setTimeout(() => {

        atual++;

        mostraPergunta();

    }, 350);
}


function mostraResultado() {

    jogo.classList.add("escondido");

    resultado.classList.remove("escondido");

    barraProgresso.style.width = "100%";

    contador.textContent =
        `${perguntas.length} / ${perguntas.length}`;


    const tipo =
        Object.keys(pontos).reduce((a, b) =>
            pontos[a] >= pontos[b] ? a : b
        );


    const perfis = {

        explorador: [
            "🚀 Exploradora do Futuro",
            "Você tem curiosidade, criatividade e coragem para experimentar novas tecnologias."
        ],

        critico: [
            "🕵️ Detetive da IA",
            "Você não acredita em tudo de primeira. Verificar, questionar e pensar antes de agir é seu superpoder."
        ],

        equilibrado: [
            "⚖️ Arquiteta do Futuro",
            "Você sabe que a tecnologia pode ajudar muito, mas acredita que responsabilidade e pensamento humano continuam essenciais."
        ],

        dependente: [
            "🤖 Aprendiz Digital",
            "Você gosta da praticidade da IA, mas descobriu que usar tecnologia bem também significa saber quando fazer as coisas por conta própria."
        ],

        impulsivo: [
            "⚡ Navegadora Digital",
            "Você é rápida para experimentar novidades e aprendeu que, no mundo da IA, parar para conferir pode fazer toda a diferença."
        ],

        conservador: [
            "🛡️ Guardiã da Tecnologia",
            "Você se preocupa com os impactos da IA e percebeu que boas regras podem ajudar a tecnologia a ser usada com responsabilidade."
        ]
    };


    tituloResultado.textContent = "Em 2049...";

    textoResultado.textContent =
        historiaFinal.trim();


    perfil.innerHTML = `
        <strong>${perfis[tipo][0]}</strong>
        <span>${perfis[tipo][1]}</span>
    `;
}


document
    .querySelector("#comecar")
    .addEventListener("click", iniciarJogo);


document
    .querySelector("#reiniciar")
    .addEventListener("click", iniciarJogo);


mostraPergunta();