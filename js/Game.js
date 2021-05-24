class GAME{
    constructor(){}

    getState(){
        var gameStateref = database.ref("gameState")
        gameStateref.on("value",function(data){
            gameState = data.val();
            
        })
    }
    update(state){
        database.ref("/").update({
            'gameState': state
        })
    }
    async start(){
        if(gameState === 0){
            player = new Player()
            var playerCountref = await database.ref("playerCount").once("value");
            if(playerCountref.exists()){
                playerCount = playerCountref.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }
        car1 = createSprite(100,200,100,150)
        car2 = createSprite(300,200,100,150)
        // car3 = createSprite(500,200,100,150)
        // car4 = createSprite(700,200,100,150)

        cars = [car1,car2];
    }

    play(){
        background(rgb(198,135,103));
        image(bg,0,-displayHeight*4+50,displayWidth,displayHeight*5)
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            // var displayPos = 130;
            var index = 0;
            var x = 280;
            var y;
            for(var plr in allPlayers){
                index = index + 1;
                x = x+190;
                y = displayHeight-allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index === player.index){
                cars[index-1].shapeColor = "red";
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y;
                }
                

            }
        }
        if(keyDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 30;
            player.update();
        }

    if(player.distance > 2260){
        console.log("Game End");
    }
        drawSprites();
    }
}