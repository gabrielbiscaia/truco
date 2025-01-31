//Game Vars -------------------------------------------------------------------------------------------------------------------------------------------------------

var FirstToPlay; //decide first to play
var i; //random index
var s = 0; //indexSound
var chosenCard; //the vira of the round
var turn = 0; //decide which turn that the round is
var point = 1; //points the value this round
var turnWinner = 0; //set the winner of the turn X
var setWinner = 0; //pick the turns winners to set the Round winner
var tieFirstRound = false; //tell if tie in the first round
var winnerFirstTurn; //check the winner of first turn
var nextToStart; //decide who will be the next to start the round
var cardsCopy = new Array(); //use to reset the deck in the beginning of the each round
var playerAnswer; //look
var isFullScreen = false;
var elem = document.documentElement;
var mute = false;
var stars = false;
var msg_end;

//Player Vars -------------------------------------------------------------------------------------------------------------------------------------------------------

var cardsOfPlayer = []; //cards of the player
var playerCardPlayed; //card that the player play in this turn
var playerPoints = 0; //points of the player
var playerTrucoThisTurn = false; //check if player already truco this turn
var choseOfPlayer; //of the function player decision
var orderPlayerTurn; //decide if the player is the first or the second to play in the turn
var canPlayerTurn; //enables the play of player
var canPlayerPlay; //enable to player play a card
var playerPointsVisual = 1;


//BOT Vars -------------------------------------------------------------------------------------------------------------------------------------------------------

var cardsOfBot = []; //cards of the BOT
var botCardPlayed;  //card that the BOT play in this turn
var botPoints = 0; //points of the bot
var botTrucoThisTurn = false; //check if bot already truco this turn
var botAlreadyPlay; //if bot already played his card
var canBotTurn; //enables the play of BOT
var botPointsVisual = 1;

//Pré Game Functions -------------------------------------------------------------------------------------------------------------------------------------------------------

function cards (){
    return [
    [//4 of diamonds card 1
        '4', //name
        1,   //power
        0,    //suit(naipe)
        "img/Ouros/Card_4.png"
    ],

    [//4 of spades card 2
        '4', //name
        1,   //power
        1,    //suit(naipe)
        "img/Espadas/Card_4.png"
    ],

    [//4 of hearts card 3
        '4', //name
        1,   //power
        2,    //suit(naipe)
        "img/Copas/Card_4.png"
    ],

    [//4 of clubs card 4
        '4', //name
        1,   //power
        3,    //suit(naipe)
        "img/Paus/Card_4.png"
    ],

    [//5 of diamonds card 5
        '5', //name
        2,   //power
        0,    //suit(naipe)
        "img/Ouros/Card_5.png"
    ],

    [//5 of spades card 6
        '5', //name
        2,   //power
        1,    //suit(naipe)
        "img/Espadas/Card_5.png"
    ],
 
    [//5 of hearts card 7
        '5', //name
        2,   //power
        2,    //suit(naipe)
        "img/Copas/Card_5.png"
    ],
 
    [//5 of clubs card 8
        '5', //name
        2,   //power
        3,    //suit(naipe)
        "img/Paus/Card_5.png"
    ],

    [//6 of diamonds card 9
        '6', //name
        3,   //power
        0,    //suit(naipe)
        "img/Ouros/Card_6.png"
    ],

    [//6 of spades card 10
        '6', //name
        3,   //power
        1,    //suit(naipe)
        "img/Espadas/Card_6.png"
    ],
 
    [//6 of hearts card 11
        '6', //name
        3,   //power
        2,    //suit(naipe)
        "img/Copas/Card_6.png"
    ],
 
    [//6 of clubs card 12
        '6', //name
        3,   //power
        3,    //suit(naipe)
        "img/Paus/Card_6.png"
    ],

    [//7 of diamonds card 13
        '7', //name
        4,   //power
        0,    //suit(naipe)
        "img/Ouros/Card_7.png"
    ],

    [//7 of spades card 14
        '7', //name
        4,   //power
        1,    //suit(naipe)
        "img/Espadas/Card_7.png"
    ],
 
    [//7 of hearts card 15
        '7', //name
        4,   //power
        2,    //suit(naipe)
        "img/Copas/Card_7.png"
    ],
 
    [//7 of clubs card 16
        '7', //name
        4,   //power
        3,    //suit(naipe)
        "img/Paus/Card_7.png"
    ],

    [//Q of diamonds card 17
        'Q', //name
        5,   //power
        0,    //suit(naipe)
        "img/Ouros/Card_Q.png"
    ],

    [//Q of spades card 18
        'Q', //name
        5,   //power
        1,    //suit(naipe)
        "img/Espadas/Card_Q.png"
    ],
 
    [//Q of hearts card 19
        'Q', //name
        5,   //power
        2,    //suit(naipe)
        "img/Copas/Card_Q.png"
    ],

    [//Q of clubs card 20
        'Q', //name
        5,   //power
        3,    //suit(naipe)
        "img/Paus/Card_Q.png"
    ],

    [//J of diamonds card 21
        'J', //name
        6,   //power
        0,    //suit(naipe)
        "img/Ouros/Card_J.png"
    ],

    [//J of spades card 22
        'J', //name
        6,   //power
        1,    //suit(naipe)
        "img/Espadas/Card_J.png"
    ],
 
    [//J of hearts card 23
        'J', //name
        6,   //power
        2,    //suit(naipe)
        "img/Copas/Card_J.png"
    ],
 
    [//J of clubs card 24
        'J', //name
        6,   //power
        3,    //suit(naipe)
        "img/Paus/Card_J.png"
    ],

    [//K of diamonds card 25
        'K', //name
        7,   //power
        0,    //suit(naipe)
        "img/Ouros/Card_K.png"
    ],

    [//K of spades card 26
        'K', //name
        7,   //power
        1,    //suit(naipe) 
        "img/Espadas/Card_K.png"
    ],
 
    [//K of hearts card 27
        'K', //name
        7,   //power
        2,    //suit(naipe)
        "img/Copas/Card_K.png"
    ],
 
    [//K of clubs card 28
        'K', //name
        7,   //power
        3,    //suit(naipe)
        "img/Paus/Card_K.png"
    ],
 
    [//A of diamonds card 29
        'A', //name
        8,   //power
        0,    //suit(naipe)
        "img/Ouros/Card_A.png"
    ],

    [//A of spades card 30
        'A', //name
        8,   //power
        1,    //suit(naipe)
        "img/Espadas/Card_A.png"
    ],
 
    [//A of hearts card 31
        'A', //name
        8,   //power
        2,    //suit(naipe)
        "img/Copas/Card_A.png"
    ],
 
    [//A of clubs card 32 
        'A', //name
        8,   //power
        3,    //suit(naipe)
        "img/Paus/Card_A.png"
    ],

    [//2 of diamonds card 33
        '2', //name
        9,   //power
        0,    //suit(naipe)
        "img/Ouros/Card_2.png"
    ],

    [//2 of spades card 34
        '2', //name
        9,   //power
        1,    //suit(naipe)
        "img/Espadas/Card_2.png"
    ],
 
    [//2 of hearts card 35
        '2', //name
        9,   //power
        2,    //suit(naipe)
        "img/Copas/Card_2.png"
    ],
 
    [//2 of clubs card 36
        '2', //name
        9,   //power
        3,    //suit(naipe)
        "img/Paus/Card_2.png"
    ],

    [//3 of diamonds card 37
        '3', //name
        10,   //power
        0,    //suit(naipe)
        "img/Ouros/Card_3.png"
    ],

    [//3 of spades card 38
        '3', //name
        10,   //power
        1,    //suit(naipe)
        "img/Espadas/Card_3.png"
    ],
 
    [//3 of hearts card 39
        '3', //name
        10,   //power
        2,    //suit(naipe)
        "img/Copas/Card_3.png"
    ],
 
    [//3 of clubs card 40
        '3', //name
        10,   //power
        3,    //suit(naipe)
        "img/Paus/Card_3.png"
    ],
];}

function loadPage(urlLoadPage,idcontainer){

    $.ajax({url: urlLoadPage, success: function(result){
        $("#"+idcontainer).html(result);
    }});
    

}

function fullscreen(){
        //Se o estado atual for "FullScreen", desativá-lo.
        //Note que para as verificações é feito uma validação para todos os possíveis navegadores, facilitando a sua vida.
        if (document.exitFullscreen) {
        document.exitFullscreen();
        isFullScreen = false;
        } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
        isFullScreen = false;
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
        document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
        isFullScreen = false;
        }


    if (elem.requestFullscreen) {
        elem.requestFullscreen();
        isFullScreen = true;
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
        isFullScreen = true;
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
        isFullScreen = true;
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
        isFullScreen = true;
    }

}

function help(mode){

    if(mode == "on"){

        $("#tips").css("display","flex");

    }else if(mode == "off"){

        $("#tips").css("display","none");

    }

}

function closeLastQuestions(){

    $("#modalLastQuestions").css("display","none");

}

function modalHowToPlay(mode){

    if(mode == "on"){

        $("#howToPlay").css("display","flex");

    }else if(mode == "off"){

        $("#howToPlay").css("display","none");

    }

}

function muteONOF(){

    if(mute == false){

        mute = true;
        $("#mute").attr("src","img/SoundOff_Icon.png");

    }else if(mute == true){

        mute = false;
        $("#mute").attr("src","img/SoundOn_Icon.png")

    }

}

function changePointVisual(visualWinner){

    if(visualWinner == 1){

        if(playerPointsVisual == 1){

            $("#playerTurnPoints1").css("background-color","blue");
            playerPointsVisual++;

        }else if(playerPointsVisual == 2){

            $("#playerTurnPoints2").css("background-color","blue");
            playerPointsVisual++;
    
        }

    }else if(visualWinner == -1){

        if(botPointsVisual == 1){

            $("#botTurnPoints1").css("background-color","red");
            botPointsVisual++;

        }else if(botPointsVisual == 2){

            $("#botTurnPoints2").css("background-color","red");
            botPointsVisual++;
            
        }

    }else if(visualWinner == 0){

        if((playerPointsVisual == 1)&&(botPointsVisual == 1)){

            $("#playerTurnPoints1").css("background-color","blue");
            playerPointsVisual++;

            $("#botTurnPoints1").css("background-color","red");
            botPointsVisual++;

        }else if((playerPointsVisual == 2)&&(botPointsVisual == 1)){

            $("#playerTurnPoints2").css("background-color","blue");
            playerPointsVisual++;

            $("#botTurnPoints1").css("background-color","red");
            botPointsVisual++;

        }else if((playerPointsVisual == 1)&&(botPointsVisual == 2)){

            $("#playerTurnPoints1").css("background-color","blue");
            playerPointsVisual++;

            $("#botTurnPoints2").css("background-color","red");
            botPointsVisual++;
            
        }

    }

}

function soundCard(){

    var playingCard

    if(s == 6){

        s = 0;

    }

    playingCard = document.getElementById("playingCard"+s);

    playingCard.volume = 0.4;
    playingCard.play();

    s++;

}

function soundChose(){

    var clickChoseAudio = document.getElementById("ChoseAudio");

    if(mute == false){

        clickChoseAudio.volume = 0.2;
        clickChoseAudio.play();

    }

}

function soundConfig(){

    var clickConfigAudio = document.getElementById("ConfigAudio");

    if(mute == false){

        clickConfigAudio.volume = 0.2;
        clickConfigAudio.play();

    }

}

function answerAudio(){

    var clickAnswerAudio = document.getElementById("AnswerAudio");

    if(mute == false){

        clickAnswerAudio.volume = 0.1;
        clickAnswerAudio.play();

    }

}

function randomNumber(){ //random to 0 to 1, if 0 player start if one bot start

    return Math.random();

}

function startGame(){ //this function will load another page inside the main one

    document.documentElement.style.overflow = 'hidden'; //to disaper with the scroll
    document.body.scroll = "no"; //to unable the scroll of the mouse
    playerTrucoThisTurn == false;
    botTrucoThisTurn == false;
    indexQuestion = 0;
    scorePercent = 0;

    FirstToPlay = randomNumber();

    if(FirstToPlay <= 0.5){

        nextToStart = "player";

    }else if(FirstToPlay > 0.5){

        nextToStart = "bot";

    }else{

        console.log("problem to decide who will start");

    }

    $("#cardOfBotPlayed").hide();
    $("#cardOfPlayerPlayed").hide();
    $("#calledTruco").hide();
    $("#continueGame").show();


    newRound();

}

function initializeModal(){

    $("#modalBox").css("display","flex");

}

function endedQuestions(){
    
    finalMsg();
    $("#modalEndQuestions").css("display","flex");

}

function options(mode){

    if(mode == "off"){

        $("#modalEndQuestions").css("display","none");

    }

}

function choseAnswer(indexAnswer){

    answerAudio();

    playerAnswer = indexAnswer; //only works with this

    if((playerPoints >= 10)||(botPoints >= 10)){//truco when the game ends and you don't finished to answer all the answers

        if(correctAnswers[indexQuestion][indexAnswer] == true){//correct part of the code

            $("#calledTruco").html("Voce acertou a questão! Agora essa rodada vale "+point+" pontos");

            if(stars){

                stars.destroy();

            }

                animation("animation/estrela.json","stars",false,function(){

                    $("#stars").show();

                },function(){

                    $("#stars").hide();

                },"stars");

            $("#modalBox").css("display","none");

            indexQuestion++;
            scorePercent++;

            if(indexQuestion == questions.length){

                $("#continueGame").hide();
                endedQuestions();
                msg_end = msg_end.replace("Voce pode decidir entre continuar jogando, porem sem perguntas, ou pode optar por encerrar o jogo.","");
                $("#msgEndGame").html(msg_end); 

            }

            newQuestion();

        }else{

            $("#modalBox").css("display","none");

            indexQuestion++;

            if(indexQuestion == questions.length){

                $("#continueGame").hide();
                endedQuestions();
                msg_end = msg_end.replace("Voce pode decidir entre continuar jogando, porem sem perguntas, ou pode optar por encerrar o jogo.","");
                $("#msgEndGame").html(msg_end); 

            }

            newQuestion();

        }

    }else{//truco while the game is happening

        if(playerTrucoThisTurn == true){   

            if(correctAnswers[indexQuestion][indexAnswer] == true){
    
                scorePercent++;

                if(point == 1){
                
                    if (correctAnswers[indexQuestion][playerAnswer]){
    
                        point = 2;
    
                        $("#calledTruco").html("Voce acertou a questão! Agora essa rodada vale "+point+" pontos");

                        if(stars){

                            stars.destroy();
            
                        }

                        animation("animation/estrela.json","stars",false,function(){

                            $("#stars").show();

                        },function(){

                            $("#stars").hide();

                        },"stars");
                        messageTop();
    
                        $("#pointOfTheTurn").html("Valor da Rodada: "+point);
    
                    }
    
                }else if(point == 2){
    
                    if (correctAnswers[indexQuestion][playerAnswer]){
    
                        point = 3;
    
                        $("#calledTruco").html("Voce acertou a questão! Agora essa rodada vale "+point+" pontos");

                        if(stars){

                            stars.destroy();
            
                        }

                        animation("animation/estrela.json","stars",false,function(){

                            $("#stars").show();

                        },function(){

                            $("#stars").hide();

                        },"stars");

                        messageTop();
    
                        $("#pointOfTheTurn").html("Valor da Rodada: "+point);
    
                    }
    
                }else if(point == 3){
    
                    if (correctAnswers[indexQuestion][playerAnswer]){

                        if(stars){

                            stars.destroy();
            
                        }

                        animation("animation/estrela.json","stars",false,function(){

                            $("#stars").show();

                        },function(){

                            $("#stars").hide();

                        },"stars");

                        point = 5;
    
                        $("#calledTruco").html("Voce acertou a questão! Agora essa rodada vale "+point+" pontos");
                        messageTop();
    
                        $("#pointOfTheTurn").html("Valor da Rodada: "+point);
    
                    }
    
                }else{
    
                    console.log("xxxxxxxxxx ERROR xxxxxxxxxx");
                    console.log("The points at function truco are having some problems");
    
                }
    
            }else{
    
                $("#calledTruco").html("Voce errou a questão! A rodada continua valendo "+point+" ponto(s)");
                messageTop();
                
            }
            
            indexQuestion++;//advance for next question

            if(indexQuestion == questions.length){ //here ended the questions

                endedQuestions(); //start a modal saying that finished the questions and ask the player if he wants to continue
    
            }
            
            canPlayerPlay = true;
    
        }else if(botTrucoThisTurn == true){
    
            if(correctAnswers[indexQuestion][indexAnswer] == true){
    
                scorePercent++;

                $("#calledTruco").html("Voce acertou a questão e cancelou o truco do Adversario!!");

                if(stars){

                    stars.destroy();
    
                }

                animation("animation/estrela.json","stars",false,function(){

                    $("#stars").show();

                },function(){

                    $("#stars").hide();

                },"stars");

                messageTop();
    
            }else if(correctAnswers[indexQuestion][indexAnswer] == false){
    
                if(point == 1){
    
                    point = 2;
                    $("#pointOfTheTurn").html("Valor da Rodada: "+point);
    
                    $("#calledTruco").html("Voce errou a questão! Agora a rodada  vale "+point+" ponto(s)");
                    messageTop();
    
                }else if(point == 2){
    
                    point = 3;
                    $("#pointOfTheTurn").html("Valor da Rodada: "+point);
    
                    $("#calledTruco").html("Voce errou a questão! Agora a rodada  vale "+point+" ponto(s)");
                    messageTop();
    
                }else if(point == 3){
    
                    point = 5;
                    $("#pointOfTheTurn").html("Valor da Rodada: "+point);
    
                    $("#calledTruco").html("Voce errou a questão! Agora a rodada  vale "+point+" ponto(s)");
                    messageTop();
    
                }
    
            }
    
            indexQuestion++;

            if(indexQuestion == questions.length ){ //here ended the questions

                endedQuestions(); //start a modal saying that finished the questions and ask the player if he wants to continue
    
            }
    
            
            botPlay();
    
        }
    
        $("#modalBox").css("display","none");

    }

}

function newQuestion(){

    if(indexQuestion == questions.length){

        if(point == 1){

            point = 2;

        }else if(point == 2){

            point = 3;

        }else if(point == 3){

            point = 5;

        }else if(point == 5){

            console.log("We arrived in the limit of trucos");

        }else{

            console.log("Problem with newQuestion first 'if' truco");

        }

        if(playerTrucoThisTurn == true){

            $("#notificationText").html("Voce pediu truco! Agora a rodada vale "+point+" pontos");
    
        }else if(botTrucoThisTurn == true){
            
            if((playerPoints == 0)&&(botPoints == 0)){

                setTimeout(function(){

                    $("#notificationText").html("O Adversario pediu truco! Agora a rodada vale "+point+" pontos");
    
                },1000);

            }else{

                $("#notificationText").html("O Adversario pediu truco! Agora a rodada vale "+point+" pontos");

            }
    
        }

        $("#notification").fadeIn('slow', function(){

            setTimeout(function(){

                $("#notification").fadeOut('slow');
    
            }, 2000);

        });

        $("#pointOfTheTurn").html("Valor da Rodada: "+point);

        if(botTrucoThisTurn == true){

            botPlay();

        }

    }else{

        var html = '';

        $("#question").html(questions[indexQuestion]);

        for(i = 0; i < answers[indexQuestion].length; i++){

            html = html +'<p class="answerParagraph" onclick="choseAnswer('+i+');" >'+answers[indexQuestion][i]+'</p><br>';

        }

        $("#answer").html(html);

        if((playerPoints >= 10)||(botPoints >= 10)){ //conected with lastquestions

            initializeModal("modalBox");

        }else{ //conected with the truco of bot and player while in the game

            if(playerTrucoThisTurn == true){

                $("#notificationText").html("Voce pediu truco! Acerte a questão para essa rodada valer mais pontos!");
        
            }else if(botTrucoThisTurn == true){
        
                $("#notificationText").html("O Adversario pediu truco! Acerte a questão para que anule o truco dele!");
        
            }
        
            $("#notification").fadeIn('1000',function(){
        
                setTimeout(function(){
        
                    $("#notification").fadeOut('1000',function(){
        
                        initializeModal("modalBox");
        
                    })
        
                }, 4000);
        
            });

        }    

    } 

}

function resetGame(){

    window.location.href = "";

}

//Pré Round Functions -------------------------------------------------------------------------------------------------------------------------------------------------------

function shuffle(array) { //function ok

    var shuffleAudio = document.getElementById("shuffleAudio");
    var indexNumber = array.length; 
    var indexNow;
    var randNumber;

    if(mute == false){

        shuffleAudio.volume = 0.05;
        shuffleAudio.play();

    }

  //Enquanto houver elementos para embaralhar
  while (indexNumber) {

    // Escolhendo um index aleatório limitando ao index atual
    randNumber = Math.floor(Math.random() * indexNumber--);

    //Valor da index atual
    indexNow = array[indexNumber];

    //Trocando valor do index atual pelo index randomico
    array[indexNumber] = array[randNumber];

    //Trocando index randomico pelo index atual
    array[randNumber] = indexNow;
  }

  return array;

}

function choseViraCard(array){ //function ok

    var randNumber;
    var indexNumber = array.length; 
    var vira;

    randNumber = Math.floor(Math.random(array.length) * indexNumber--);

    vira = array[randNumber];

    $("#viraCard").show();
    $("#viraCard").attr("src",vira[3]);

    return vira;

}

function changePower(ViraCard){//change power of the manilha's cards //function ok

    var strongestCard;

    switch (ViraCard[1]){

        case 1:
            strongestCard = '5';
            break;
        case 2:
            strongestCard = '6';
            break;
        case 3:
            strongestCard = '7';
            break;
        case 4:
            strongestCard = 'Q';
            break;
        case 5:
            strongestCard = 'J';
            break;
        case 6:
            strongestCard = 'K';
            break;
        case 7:
            strongestCard = 'A';
            break;
        case 8:
            strongestCard = '2';
            break;
        case 9:
            strongestCard = '3';
            break;
        case 10:
            strongestCard = '4';
            break;
    }

    for(i=0;i<cardsCopy.length;i++){

        if(strongestCard == cardsCopy[i][0])
        {
            cardsCopy[i][1] = 11;
        }

    }

}

function serveCards(array){ //function ok

    var randNumber;
    var indexNumber = array.length; 

    for(i=0;i<3;i++){ //cards of the player

        randNumber = Math.floor(Math.random(array.length) * indexNumber--);

        cardsOfPlayer[i] = array[randNumber];

        $("#card"+i).show(); 
        $("#card"+i).attr("src",cardsOfPlayer[i][3]);

        array.splice(array.indexOf(cardsOfPlayer[i]), 1); //remove a card of the deck

    }
    
    for(i=0;i<3;i++){ //cards of the bot

        randNumber = Math.floor(Math.random(array.length) * indexNumber--);
    
        cardsOfBot[i] = array[randNumber];
    
        array.splice(array.indexOf(cardsOfBot[i]), 1); //remove a card of the deck
    
    }  

}

function newRound(){

    cardsCopy = [];

    cardsTemp = cards();

    for(i = 0;i < cardsTemp.length; i++){

        cardsCopy.push(cardsTemp[i]);

    }

    cardsCopy = shuffle(cardsCopy);

    chosenCard = choseViraCard(cardsCopy) //chose the vira

    cardsCopy.splice(cardsCopy.indexOf(chosenCard), 1); //remove the vira of the deck //problem, put inside the deck

    changePower(chosenCard); //chose the manilha //fix to change to the main power first

    serveCards(cardsCopy); //give the cards to player and bot

    $("#chose").hide() //hide the buttons of the player

    nextToPlay();

}

function nextToPlay(){

    if(turn == 0){ //1st turn

        if(nextToStart == "player"){

            orderPlayerTurn = 1;
            $("#chose").show();
            $("#waitingForPlayer").show();
            canPlayerTurn = true;
            nextToStart = "bot";

            if(playerTrucoThisTurn == false){

                $("#trucoButton").fadeIn("200",function(){
        
                    brokenFluxo = true;
        
                });
                
            }   

        }else if(nextToStart == "bot"){

            orderPlayerTurn = 2;
            $("#chose").show();
            canPlayerTurn = true;
            nextToStart = "player";

            if(playerTrucoThisTurn == false){

                $("#trucoButton").fadeIn("200",function(){
        
                    brokenFluxo = true;
        
                });
                
            }

            botTurn();

        }

    }else if (turn > 0){ //2nd or 3rd turn

        if (turnWinner > 0){ //if player win last turn, player start

            $("#chose").show();
            canPlayerTurn = true;
            orderPlayerTurn = 1;

        }else if(turnWinner < 0){ //if bot win last turn, bot start

            orderPlayerTurn = 2;

            botTurn();

        }else if(turnWinner == 0){ //if tie last turn, who win the first round start

            if(winnerFirstTurn > 0){

                $("#chose").show();
                canPlayerTurn = true;
                orderPlayerTurn = 1;

            }else if(winnerFirstTurn < 0){

                $("#chose").show();
                canPlayerTurn = true;
                orderPlayerTurn = 2;

                botTurn();

            }else{ //if tie in the first round, BOT start

                $("#chose").show();
                canPlayerTurn = true;
                orderPlayerTurn = 2;

                botTurn();

            }
                
        }

    }

}

//Pos Round Functions -------------------------------------------------------------------------------------------------------------------------------------------------------

function messageTop(){

    $("#calledTruco").slideDown('slow',function messageCloseTop(){

        setTimeout(function(){

            $("#calledTruco").slideUp('slow');
    
        }, 3500);
    

    });

}

function messageDown(){

    $("#winOfTheRound").slideDown('slow', function messageCloseLeft(){

        setTimeout(function(){

            $("#winOfTheRound").slideUp('slow');
    
        }, 3000);
        
    });

}

function setTurnWinner(){ //decide the winner of the turn

    turn++;

    if ((turn == 2)&&(tieFirstRound == true)){

        if(playerCardPlayed[1] > botCardPlayed[1]){

            changePointVisual(1);
            $("#waitingForPlayer").show();

            return +2;

        }else if(botCardPlayed[1] > playerCardPlayed[1]){

            changePointVisual(-1);

            return -2;  

        }else if(botCardPlayed[1] == playerCardPlayed[1]){

            return 0;

        }

    }else if(botCardPlayed[1] > playerCardPlayed[1]){

        if(turn == 1){

            winnerFirstTurn = -1;

        }
        changePointVisual(-1);

        return -1;

    }else if(playerCardPlayed[1] > botCardPlayed[1]){
    
        if(turn == 1){
    
            winnerFirstTurn = +1;
    
        }

        changePointVisual(1);
        $("#waitingForPlayer").show();
    
        return +1;  

    }else if((playerCardPlayed[1] == botCardPlayed[1])&&(playerCardPlayed[1] == 11)){

        if(playerCardPlayed[2] > botCardPlayed[2]){

            changePointVisual(1);
            $("#waitingForPlayer").show();

            return +1;

        }else if (botCardPlayed[2] > playerCardPlayed[2]){

            changePointVisual(-1);

            return -1;

        }       

    }else{

        console.log("Tie the ",turn," turn");
        changePointVisual(0);

        if(turn == 1){

            tieFirstRound = true;

        }else if(turn >= 2){

            if(winnerFirstTurn > 0){

                $("#waitingForPlayer").show();

                return 1;

            }else if(winnerFirstTurn < 0){

                return -1;

            }else{

                return 0;

            }

        }
        
        return 0;

    }

    canPlayerTurn = false;
    //if player win (+1) if bot win (-1) if tie (0)
}

function resetRoundData(){

    playerTrucoThisTurn = false;
    botTrucoThisTurn = false;
    tieFirstRound = false;
    canPlayerTurn = false;
    canPlayerPlay = false;
    canBotTurn = false;
    winnerFirstTurn = 0;
    setWinner = 0;
    turn = 0;
    point = 1;
    playerPointsVisual = 1;
    botPointsVisual = 1;

    $("#playerTurnPoints1").css("background-color","#5d9b9b");
    $("#playerTurnPoints2").css("background-color","#5d9b9b");
    $("#botTurnPoints1").css("background-color","#cc6961");
    $("#botTurnPoints2").css("background-color","#cc6961");
    $("#pointOfTheTurn").html("Valor da Rodada: "+point);
    $("#botCard0").show();
    $("#botCard1").show();
    $("#botCard2").show();


}

function setRoundWinner(){ //decide the winner of the round, which is made of 3 turns

    if(setWinner > 0){

        playerPoints += point;

        $("#winOfTheRound").html("Voce ganhou "+point+" ponto(s) vencendo esta rodada"); 
        messageDown();

        resetRoundData();

    }else if(setWinner < 0){

        botPoints += point;

        $("#winOfTheRound").html("BOT ganhou "+point+" ponto(s) vencendo esta rodada"); 
        messageDown();

        resetRoundData();

    }else{ //if tie in the last round

        if(winnerFirstTurn > 0){

            playerPoints += point;

            $("#winOfTheRound").html("Voce ganhou "+point+" ponto(s) vencendo esta rodada"); 
            messageDown();

            resetRoundData();

        }else if(winnerFirstTurn < 0){

            botPoints += point;

            $("#winOfTheRound").html("BOT ganhou "+point+" ponto(s) vencendo esta rodada"); 
            messageDown();

            resetRoundData();

        }else{

            console.log("xxxxxxxxxxxx ERRO xxxxxxxxxxxx");
            console.log("Deu 0, ou seja, ninguem ganhou ponto nessa rodada...");

        }
    }

    $("#playerPoints").html("Pontos do Jogador: "+playerPoints);
    $("#botPoints").html("Pontos do Adversario: "+botPoints);

}

function setGameWinner(){ //set the winner of the game

    if(playerPoints >= 10){

        //commands to reset the game
        playerPoints = 0;
        botPoints = 0;
        point = 1;
        turn = 0; 
        turnWinner = 0; 
        setWinner = 0;
        playerCardPlayed = 0;
        botCardPlayed = 0;

    }else if(botPoints >= 10){

        //commands to reset the game
        playerPoints = 0;
        botPoints = 0;
        point = 1;
        turn = 0; 
        turnWinner = 0; 
        setWinner = 0;
        playerCardPlayed = 0;

    }

}

function finishTheTurn(){

    $("#cardOfBotPlayed").slideUp("slow");
    $("#cardOfPlayerPlayed").slideUp("slow",function(){

        turnWinner = setTurnWinner();
        setWinner += turnWinner;

        if((turn == 3)||(setWinner >= 2)||(setWinner <= -2)){

            setTimeout(function(){

                finishTheRound();

            }, 500);

        }else{

            nextToPlay();

        }


    });

}

function finishTheRound(){

    setRoundWinner(); //fix when tie the game, player and bot win one and tie the other
    

    if((playerPoints >= 10)||(botPoints >= 10)){

        if(indexQuestion != questions.length){

            $("#modalLastQuestions").css("display","flex");

        }else if(indexQuestion == questions.length){

            finishTheGame();

        }
        
        
    }else{

        newRound();
 
    }

}

function finishTheGame(){

    var winAudio = document.getElementById("winAudio");
    var defeatAudio = document.getElementById("defeatAudio");

    if(playerPoints >= 10){
        
        if(mute == false){

            winAudio.volume = 0.03;
            winAudio.play();

        }

        $("#winner").html("Jogador venceu!");
        $("#winner").css("color","#0000cd");
        $("#percentCorrect").html("Porcentagem de acerto das questões: "+(parseInt((scorePercent/indexQuestion)*100))+"%");


    }else if (botPoints >= 10){

        if(mute == false){

            defeatAudio.volume = 0.03;
            defeatAudio.play();

        }

        $("#winner").html("Adversario venceu!");
        $("#winner").css("color","#8b0000");
        $("#percentCorrect").html("Porcentagem de acerto das questões: "+(parseInt((scorePercent/indexQuestion)*100))+"%");

    }

    setGameWinner();

    $("#modalEndBackground").css("display","flex");

}

//Player Functions -------------------------------------------------------------------------------------------------------------------------------------------------------

function playerTurn(key){

    if(playerTrucoThisTurn == false){

        $("#trucoButton").fadeIn("200",function(){

            brokenFluxo = true;

        });
        
    }

    if(canPlayerTurn){    

        choseOfPlayer = key; //here I need to give the possibility to player chose a button

        if(choseOfPlayer == 1){    

            canPlayerPlay = true;

        }else if(choseOfPlayer == 2){

            if(point >= 5){

                console.log("We reached at the limit of trucos");

            }else if(point < 5){

                if (playerTrucoThisTurn == false){
                    
                    playerTrucoThisTurn = true;
                    botTrucoThisTurn = false;

                    truco();

                    $("#trucoButton").fadeOut();

                }else if(playerTrucoThisTurn == true){

                    console.log("You already call truco in this round");

                }else{

                    console.log("Problem in the truco function");

                }

            }else{

                console.log("Problem in the points");

            }

        }else{

            console.log("xxxxxxxxxx ERROR xxxxxxxxxx");
            console.log("Problem with the choise of player");

        }
    }
    
}

function playerPlay(key){ //will pick the chose of the player and after that do an action

    if(canPlayerPlay){     

        canPlayerTurn = false;
        canPlayerPlay = false;

        if(mute == false){

            soundCard();

        }

        $("#card"+key).slideUp("speed",function(){

            switch (key){

                case 0:

                    playerCardPlayed = cardsOfPlayer[0];

                    $("#cardOfPlayerPlayed").attr("src",playerCardPlayed[3]);
    
                    break;
                case 1:
                        
                    playerCardPlayed = cardsOfPlayer[1];
    
                    $("#cardOfPlayerPlayed").attr("src",playerCardPlayed[3]);
    
                    break;
                case 2:
    
                    playerCardPlayed = cardsOfPlayer[2];
    
                    $("#cardOfPlayerPlayed").attr("src",playerCardPlayed[3]);
    
                    break;
                default:
    
                        console.log("invalid card");
    
                    break;
    
            }
    
            $("#cardOfPlayerPlayed").slideDown("slow",function(){

                canPlayerPlay = false;
    
                if(orderPlayerTurn == 1){
                
                    botTurn();
            
                }else if(orderPlayerTurn == 2){
        
                    setTimeout(function(){

                        $("#waitingForPlayer").hide();
                        canPlayerTurn = false;
                        finishTheTurn();

                    }, 1500);
        
                }

            });

        }); 

        $("#waitingForPlayer").hide();

    }

}

function truco(){ //if you answer correctly, increase points

    newQuestion();

} 

//BOT Functions -------------------------------------------------------------------------------------------------------------------------------------------------------

function botTurn(){

    var botChoice;

    do{
    
        botChoice = randomNumber(); //decide which of those bot will do

        if(botChoice > 0.25){ //bot play a card

            botAlreadyPlay = true;

            setTimeout(function(){

                botPlay();   

            }, 1000);
                     

        }else if(botChoice <= 0.25){ //bot calls truco

            if(point >= 5){

                console.log("We reached at the limit of trucos");

            }else if(point < 5){

                console.log("Bot called truco");

                if(botTrucoThisTurn == false){

                    botAlreadyPlay = true;

                    botTruco();  

                }else if(botTrucoThisTurn == true){

                    botAlreadyPlay = false;

                }else{

                    console.log("problem in bot's truco");

                }
                

            }else{

                console.log("Problem in the points");

            }
        
        }else{

            console.log("xxxxxxxxxx ERROR xxxxxxxxxx");
            console.log("Problem in the bot's choice");

        }


    }while(botAlreadyPlay == false);

}

function botPlay(){

    if(mute == false){

        soundCard();

    }
    
    botCardPlayed = cardsOfBot[turn];

    if(turn == 0){

        $("#botCard2").slideUp('slow');

    }else if(turn == 1){

        $("#botCard0").slideUp('slow');

    }else if(turn ==2){

        $("#botCard1").slideUp('slow');

    }

    $("#cardOfBotPlayed").attr("src",botCardPlayed[3]);
    $("#cardOfBotPlayed").slideDown("slow",function(){

        if(orderPlayerTurn == 2){

            $("#chose").show();
            $("#waitingForPlayer").show();
            canPlayerTurn = true;

        }else if(orderPlayerTurn == 1){

            setTimeout(function(){

                $("#waitingForPlayer").hide();
                canPlayerTurn = false;
                finishTheTurn();

            }, 1500);

        }

    });

    

}

function botTruco(){

    playerTrucoThisTurn = false;
    botTrucoThisTurn = true;

    $("#trucoButton").fadeIn("200",function(){

        brokenFluxo = true;

    });

    newQuestion();

}

//Roger Function -------------------------------------------------------------------------------------------------------------------------------------------------------

function animation(animation,id,loop=true,callEnter=null,callEnd=null,variable){

    eval(variable + "= bodymovin.loadAnimation({container: document.getElementById(id),loop: loop,autoplay: true,path:animation,rendererSettings: {progressiveLoad: true,}});");
    if(callEnd!=''){
        eval(variable+".addEventListener('complete',function(){ callEnd();});");
    }

    if(callEnter!=''){
        eval(variable+".addEventListener('data_ready',function(){ callEnter(); });");
    }
}

function finalMsg(){

    //Tipo de Animação
    if((parseInt((scorePercent/indexQuestion)*100))<25){animation = '0';}
    if(((parseInt((scorePercent/indexQuestion)*100))>=25) && ((parseInt((scorePercent/indexQuestion)*100))<50)){animation = '25';}
    if(((parseInt((scorePercent/indexQuestion)*100))>=50) && ((parseInt((scorePercent/indexQuestion)*100))<75)){animation = '50';}
    if(((parseInt((scorePercent/indexQuestion)*100))>=75) && ((parseInt((scorePercent/indexQuestion)*100))<100)){animation = '75';}
    if((parseInt((scorePercent/indexQuestion)*100))==100 ){animation = '100';}

    //Mensagem
    msg_end = "Todas as questões foram respondidas!! "+ eval('msg_'+animation)+". Seu acerto foi de: "+(parseInt((scorePercent/indexQuestion)*100))+"%.<br><br>Voce pode decidir entre continuar jogando, porem sem perguntas, ou pode optar por encerrar o jogo.";
    $("#msgEndGame").html(msg_end);

}
