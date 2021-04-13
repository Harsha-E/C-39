class Form{

    constructor (){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h2');
}

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        
        var title = createElement('h2', " Car Racing ");
        title.position(320,10);
    
        this.input.position(320, 110);
        this.input.size(150, 15);

        this.button.position(500,110);
        this.button.size(50, 25);
        this.button.mousePressed(()=>{

        this.input.hide();
        this.button.hide();

        player.name = this.input.value();

        playerCount = playerCount + 1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);

        this.greeting.html("Hello"+" "+ player.name);
        this.greeting.position(650, 110);

    } );

    }

}
