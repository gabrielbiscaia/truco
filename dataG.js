var questions = [
    'No jogo de Truco, qual é a ordem correta das cartas da mais fraca para a mais forte?',
    'O que é a "vira" no jogo de Truco?',
    'Quantos pontos são necessários para vencer uma partida de Truco?',
    'Em uma rodada de Truco, como se determina o vencedor?',
    'O que acontece quando há empate em uma rodada?',
    'Qual é o valor inicial de pontos de uma rodada normal no Truco?',
    'Quando um jogador pede "Truco", quanto vale a rodada se o outro aceitar?',
    'Quantas cartas cada jogador recebe no início de cada rodada?',
    'O que é uma "manilha" no jogo de Truco?',
    'Como funciona o sistema de pontuação quando há um empate no primeiro turno?'
];

var answers = [
    [
        '4, 5, 6, 7, Q, J, K, A, 2, 3',
        '3, 2, A, K, J, Q, 7, 6, 5, 4',
        'A, K, Q, J, 7, 6, 5, 4, 3, 2',
        'K, Q, J, A, 2, 3, 4, 5, 6, 7'
    ],
    [
        'A carta mais forte do jogo',
        'A carta virada para cima que define a manilha',
        'A primeira carta jogada na rodada',
        'A última carta do baralho'
    ],
    [
        '12 pontos',
        '15 pontos',
        '10 pontos',
        '9 pontos'
    ],
    [
        'Quem ganhar um turno vence a rodada',
        'Quem ganhar dois turnos vence a rodada',
        'Quem tiver a carta mais alta no último turno',
        'Quem ganhar três turnos consecutivos'
    ],
    [
        'A rodada é cancelada',
        'Ambos ganham pontos',
        'Quem ganhou o primeiro turno vence',
        'Continua até alguém vencer'
    ],
    [
        '2 pontos',
        '3 pontos',
        '1 ponto',
        '5 pontos'
    ],
    [
        '1 ponto',
        '3 pontos',
        '2 pontos',
        '4 pontos'
    ],
    [
        '4 cartas',
        '5 cartas',
        '3 cartas',
        '2 cartas'
    ],
    [
        'A carta mais forte do naipe',
        'A carta que vem depois da vira na hierarquia',
        'A primeira carta jogada',
        'A última carta do baralho'
    ],
    [
        'O jogo é reiniciado',
        'Quem tiver a maior carta no segundo turno vence',
        'A rodada continua e quem vencer dois turnos ganha',
        'Ambos recebem pontos'
    ]
];

var correctAnswers = [
    [true, false, false, false],
    [false, true, false, false],
    [false, false, true, false],
    [false, true, false, false],
    [false, false, true, false],
    [false, false, true, false],
    [false, true, false, false],
    [false, false, true, false],
    [false, true, false, false],
    [false, false, true, false]
];

var chosenAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var answerScore = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100];

var scoreTotal = 0;
var scoreResult = 0;

var msg_0 = 'Você precisa estudar mais as regras do Truco!';
var msg_25 = 'Quase lá! Estude um pouco mais as regras e tente novamente.';
var msg_50 = 'Parabéns! Você conhece bem o jogo, mas ainda pode melhorar.';
var msg_75 = 'Muito bem! Você demonstrou ótimo conhecimento das regras!';
var msg_100 = 'Perfeito! Você é um verdadeiro mestre do Truco!';

for(i = 0; i < answerScore.length; i++) {
    scoreTotal = parseInt(scoreTotal) + parseInt(answerScore[i]);
}