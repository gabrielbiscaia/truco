//Dados para quistionário---------------------------------------------
var titlePage = '{QUIZ-TITLE}';

//Dados para quistionário---------------------------------------------
var questions      = ['Questão 1','Questão 2'];

var answers        = [['Resposta 1','Resposta 2'],['Resposta 1','Resposta 2']]; 

var correctAnswers = [[true,false],[false,true]];
 
var chosenAnswers  = [0,0];

var answerScore    = [100,100];

var scoreTotal     = 0;

var scoreResult    = 0;

var msg_0              = 'Você precisa estudar mais.';
var msg_25             = 'Quase! Estude mais e tente novamente.';
var msg_50             = 'Parabéns pela pontuação!';
var msg_75             = 'Wow, parabéns pela pontuação!';
var msg_100            = 'Parabéns! conseguiu uma das melhores pontuações';

for(i=0; i<answerScore.length; i++){

    scoreTotal = parseInt(scoreTotal) + parseInt(answerScore[i]);

}

var scoreResult = 0;

document.title = titlePage;