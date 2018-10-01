function Ball( ) {
    this.x = WIDTH / 2;
    this.y = HEIGHT / 2;
    this.speed = 8;
    this.direction = - Math.PI / 5;
    this.ratio = 10;

    this.move = function( ) { 
        this.x += Math.cos( this.direction ) * this.speed;
        this.y += Math.sin( this.direction ) * this.speed;
        // Mantiene la pelota dentro de la pantalla
        if( this.x > WIDTH  || this.x < 0 || this.y > HEIGHT  || this.y < 0) {
            this.direction += Math.PI / 4;
        }
    }

    this.render = function( ) {
        ctx.beginPath();
        ctx.arc( this.x, this.y, this.ratio, 0, 2 * Math.PI );
        ctx.fill();
    }
}