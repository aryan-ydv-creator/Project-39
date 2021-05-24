
var database;
var gameState = 0;
var playerCount;
var form,player,game;
var allPlayers;
var car1,car2,car3,car4,cars;
var bg;
function preload(){
    bg = loadImage("trackkk.jpg")
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();

    game = new GAME()
    game.getState();
    game.start();
    
}

function draw(){
    // background("white");
    // drawSprites();

    if(playerCount === 2){
        game.update(1);
        
    }
    if(gameState === 1){
        clear()
        game.play();
    }
}
