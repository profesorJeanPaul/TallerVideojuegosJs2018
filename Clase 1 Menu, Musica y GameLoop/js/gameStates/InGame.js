function InGame( game ) {
    let entites = [
        new Ball()
    ];

    this.update = function( ) {
        handleInput();
        entites[ 0 ].move( );
    }

    this.render = function( ) {
        entites.forEach(element => {
            element.render( );
        });
    }

    let handleInput = function() {
        if( game.keys["left"] ) {
            game.changeState( menuState );
            soundDictionary.stopAll();
            soundDictionary.play("menuMusic");
        }
    }
}