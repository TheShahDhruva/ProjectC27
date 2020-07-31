class ground{
    constructor(x, y){
        this.body = Bodies.rectangle(x, y, 485, 20, {isStatic:true});
        this.width = 480;
        this.height = 20;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill(90,110,80);
        push();
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}