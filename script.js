// Perguntas de Português e Matemática
const perguntasPortugues = [
    { pergunta: "Qual é o plural de 'cão'?", alternativas: ["cães", "cãos", "cãoes", "caes"], correta: "cães" },
    { pergunta: "Qual a forma correta: 'houveram' ou 'houve'?", alternativas: ["houveram", "houve", "haveram", "haviu"], correta: "houve" },
    { pergunta: "Qual é o sujeito da frase: 'O João gosta de estudar.'?", alternativas: ["João", "gosta", "estudar", "gostar"], correta: "João" },
    { pergunta: "Qual a classe gramatical da palavra 'feliz'?", alternativas: ["substantivo", "adjetivo", "verbo", "pronome"], correta: "adjetivo" },
    { pergunta: "Em qual dessas palavras a letra 's' é muda?", alternativas: ["festa", "massa", "psicologia", "casa"], correta: "psicologia" },
    { pergunta: "Qual é o plural de 'mês'?", alternativas: ["meses", "meses", "meses", "meses"], correta: "meses" },
    { pergunta: "O que é um adjetivo?", alternativas: ["uma ação", "um lugar", "uma qualidade", "uma pessoa"], correta: "uma qualidade" },
    { pergunta: "Qual é o sinônimo de 'rápido'?", alternativas: ["lento", "devagar", "ágil", "pesado"], correta: "ágil" },
    { pergunta: "Qual é o antônimo de 'alto'?", alternativas: ["baixo", "leve", "pobre", "longo"], correta: "baixo" },
    { pergunta: "O que é uma oração subordinada?", alternativas: ["Uma frase que depende de outra", "Uma frase completa", "Uma frase exclamativa", "Uma frase negativa"], correta: "Uma frase que depende de outra" },
];

const perguntasMatematica = [
    { pergunta: "Quanto é 5 + 7?", alternativas: ["10", "11", "12", "13"], correta: "12" },
    { pergunta: "Qual é o valor de 6 x 8?", alternativas: ["42", "48", "54", "56"], correta: "48" },
    { pergunta: "Quanto é 16 dividido por 4?", alternativas: ["4", "5", "6", "7"], correta: "4" },
    { pergunta: "Qual o valor de 25 x 4?", alternativas: ["100", "104", "95", "105"], correta: "100" },
    { pergunta: "Quanto é 30 - 12?", alternativas: ["18", "17", "19", "20"], correta: "18" },
    { pergunta: "O que é 3²?", alternativas: ["6", "9", "12", "16"], correta: "9" },
    { pergunta: "Quantos graus tem um ângulo reto?", alternativas: ["90", "180", "360", "270"], correta: "90" },
    { pergunta: "Quanto é 7 + 8 x 2?", alternativas: ["22", "23", "24", "25"], correta: "23" },
    { pergunta: "Qual é o próximo número da sequência: 2, 4, 6, 8, ...?", alternativas: ["10", "11", "12", "9"], correta: "10" },
    { pergunta: "Quanto é 50 dividido por 5?", alternativas: ["5", "6", "10", "12"], correta: "10" },
];

// Ranking
let ranking = [];

// Variáveis de controle
let nomeAluno = '';
let pontuacao = 0;
let perguntas = [...perguntasPortugues, ...perguntasMatematica];

// Função para iniciar o quiz
function iniciarQuiz() {
    nomeAluno = document.getElementById('nome').value;
    if (nomeAluno === "") {
        alert("Por favor, insira seu nome.");
        return;
    }

    // Esconde a tela de início e mostra o quiz
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';

    // Começa o quiz
    pontuacao = 0;
    embaralharPerguntas();
    exibirPergunta();
    document.getElementById("music").play();
}

// Função para embaralhar as perguntas
function embaralharPerguntas() {
    perguntas = perguntas.sort(() => Math.random() - 0.5);
}

// Função para exibir uma pergunta
let indicePergunta = 0;
function exibirPergunta() {
    if (indicePergunta >= perguntas.length) {
        mostrarResultado();
        return;
    }

    const perguntaAtual = perguntas[indicePergunta];
    document.getElementById('pergunta').innerText = perguntaAtual.pergunta;

    // Exibe as alternativas
    const alternativasDiv = document.getElementById('alternativas');
    alternativasDiv.innerHTML = '';
    perguntaAtual.alternativas.forEach(alt => {
        const button = document.createElement('button');
        button.innerText = alt;
        button.onclick = () => verificarResposta(alt);
        alternativasDiv.appendChild(button);
    });
}

// Função para verificar a resposta
function verificarResposta(resposta) {
    const perguntaAtual = perguntas[indicePergunta];
    if (resposta === perguntaAtual.correta) {
        pontuacao++;
        document.getElementById('resultado').inner