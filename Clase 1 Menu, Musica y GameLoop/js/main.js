const canvas = document.getElementById( "canvas" )
const ctx = canvas.getContext( "2d" )
const soundDictionary = new SoundDictionary();
const WIDTH = 800;
const HEIGHT = 600;
var MyGame;
var  inGameState;
var  menuState;

// Inicializa el lienzo
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.backgroundColor = "black";
ctx.fillStyle = "white";
ctx.strokeStyle = "white";

// Inicializa el juego
MyGame = 
{
    init: function() {
        inGameState = new InGame( this );
        menuState = new Menu( this );
        this.state = inGameState;
        this.update = this.state.update;
        this.render = this.state.render;
    },
    changeState: function( state ) {
        this.state = state;
        this.update = this.state.update;
        this.render = this.state.render;
    },
    keys: {
        "left": false,
        "up": false,
        "right": false,
        "down": false
    }
};
MyGame.init();

// Inicia el ciclo del juego
;( function ( ) {
    function main( tFrame ) {
        MyGame.stopMain = window.requestAnimationFrame( main );
        // Llama al método de actualización, indica en que frame esta
        update( tFrame ); 
        render();
    }
    main(); // Comienza el ciclo
} )( );

// Desarrolla el frame del juego
function update( frame ) {
    MyGame.update( );
}

// Limpia la pantalla y dibuja lo que allí debe aparecer
function render( ) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    MyGame.render( );
}

// Configura las entradas de teclado del juego
document.addEventListener( "keydown", keyDown, false );
document.addEventListener( "keyup", keyUp, false );

function keyDown( key ) {
    if( key.keyCode === 37 ) {
        MyGame.keys["left"] = true;
    }
    if( key.keyCode === 38 ) {
        MyGame.keys["up"] = true;
    }
    if( key.keyCode === 39 ) {
        MyGame.keys["right"] = true;
    }
    if( key.keyCode === 40 ) {
        MyGame.keys["down"] = true;
    }
}
function keyUp( key ) {
    if( key.keyCode === 37 ) {
        MyGame.keys["left"] = false;
    }
    if( key.keyCode === 38 ) {
        MyGame.keys["up"] = false;
    }
    if( key.keyCode === 39 ) {
        MyGame.keys["right"] = false;
    }
    if( key.keyCode === 40 ) {
        MyGame.keys["down"] = false;
    }
}