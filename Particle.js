class Particle{
    constructor(x,y,r){
        var options={
        }

this.r=r;

this.body=Bodies.circle(this.x,this.y,this.r,options);
this.color=color(random(0,255),random(0,255),random(0,255))
World.add(world,this.body);

}
display(){
    var pos=this.body.position;
    var angle =this.body.angle;
    push();
    translate(pos.x,pos.y);
    rectMode(angle);
    noStroke();
    fill(this.color);
    ellipse(RADIUS);
    ellipse(0,0,this.r, this.r);
    pop();
    }

}



