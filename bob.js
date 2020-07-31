class bob {
    constructor(x){
        var options = {
            friction: 0.5,
            density: 0.1,
            restitution: 0.0,
            airFriction: 1.0
        }
        this.body = Bodies.circle(x, 500, 30);
        this.radius = 20;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        push();
        ellipseMode(RADIUS);
        translate(pos.x, pos.y);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}