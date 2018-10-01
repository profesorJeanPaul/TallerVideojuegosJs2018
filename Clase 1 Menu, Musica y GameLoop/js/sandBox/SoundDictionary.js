function SoundDictionary() {
    const sounds = {
        "menuMusic": new Sound("./sound/MattOglseby - 1.ogg"),
        "gameMusic": new Sound("./sound/MattOglseby - 5.ogg")
    }

    this.play = function( musicName ) {
        sounds[musicName].play();
    }
    
    this.stop = function( musicName ) {
        sounds[musicName].stop();
    }

    this.stopAll = function( ) {
        for(let i in sounds){
            sounds[i].stop();
        }
    }
}