class Game {
    constructor() {}
    getState() {
        var gameStateRef = database.ref('gameState');

        gameStateRef.on("value", function (data) {
            gameState = data.val();
        });

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }
        car1 = createSprite( 200,350, 50, 50);
        car1.addImage(car1Img);

        car2 = createSprite( 400,350, 50, 50);
        car2.addImage(car2Img);

        car3 = createSprite( 600,350, 50, 50);
        car3.addImage(car3Img);

        car4 = createSprite( 800,350, 50, 50);
        car4.addImage(car4Img);

        cars = [car1,car2, car3, car4];

    }

    play() {
        form.hide();
        textSize(30);
        text(" ||>>~Ready On Your Keys! ", width/2, height/2);
        Player.getPlayerInfo();

        if(player.distance > 3750){
            gameState = 2;
        }

        if (allPlayers !== undefined) {

            background("lavender");
            image(trackImg, 10, -displayHeight*4 , displayWidth, displayHeight*5);
            
        drawSprites();

            // ground = createSprite( 800,350, 50, 50);
            // ground.addImage(groundImg);
            var index = 0;
            var x = 200;
            var y;
            var display_position = 130;
            for (var plr in allPlayers) {
                index = index + 1;
                x = x + 200;
                y = displayHeight - allPlayers[plr].distance;
                cars[index - 1].x = x;
                cars[index - 1].y = y;
                
                if (index === player.index) {
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = width / 2;
                    camera.position.y = cars[index - 1].y;
                } else {
                    fill('black');
                }
                display_position += 20;
                textSize(15);
                text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, display_position);

            }
        }

        if (keyDown(UP_ARROW) && player.index !== null) {
            player.distance = player.distance + 30;
            player.update();
            console.log(player.distance);
        }
        
    }


}
