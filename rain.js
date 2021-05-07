class Rain {
    constructor(x, y) {

        var options ={
            restitution:0.4,
            friction:0.1,
            frictionAir:0.05
        }
      
        this.body = Bodies.circle(x, y , 10 , options);       
        World.add(world, this.body);

    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body , {x:random(0,400) , y:random(0,400)})
        }
    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill("white")
        ellipseMode(RADIUS);
        ellipse(0 , 0 , 5, 5);
        pop();
    }

};