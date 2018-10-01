function Menu( game ) {
    

    this.update = function( ) {
        handleInput( );
    }

    this.render = function( ) {
        ctx.font = "30px Arial";
        ctx.fillText("Menu", WIDTH / 2, HEIGHT / 2);
    }

    let handleInput = function() {
        if( game.keys["right"] ) {
            game.changeState( inGameState );
            soundDictionary.stopAll();
            soundDictionary.play("gameMusic");
        }
    }
}