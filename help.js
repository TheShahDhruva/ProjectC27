class help {
    constructor(x, y){
        var options = {
            restitution:1.2
        }
        this.body = Bodies.circle(x, y, 40, options);
        this.radius = 40;
        World.add(world, this.body);
    }
    
    display(){
        var pos = this.body.position;
        push();
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipseMode(RADIUS);
        translate(pos.x, pos.y);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}