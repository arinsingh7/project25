class Dustbin{

    constructor(x, y){
       // var options = {
            //'isStatic': true,
           
        //}
 
        //this.dustbin = Bodies.rectangle(this.x, this.y, width, height,{options});
        this.image = loadImage("dustbinimg.png");
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 100;
        this.wallThickness = 20;
        this.angle = 0;
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.width, this.wallThickness, {isStatic : true});
        
        this.leftWall = Bodies.rectangle(this.x - 100, this.y - 40, this.wallThickness, this.height,{isStatic : true});
        Matter.Body.setAngle(this.leftWall, this.angle);
        
        this.rightWall = Bodies.rectangle(this.x + 100, this.y - 40, this.wallThickness, this.height,{isStatic : true});
        Matter.Body.setAngle(this.rightWall, -1 * this.angle);

        World.add(world, this.bottomBody);
        World.add(world, this.leftWall);
        World.add(world, this.rightWall);

       
 
     }
     display(){
        var posB = this.bottomBody.position;
        var posL = this.leftWall.position;
        var posR = this.rightWall.position;
        push();
        translate(posL.x, posL.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("brown");
        rotate(this.angle);
        rect( 0, 0,this.wallThickness, this.height);
        pop();

        push();
        translate(posR.x, posR.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("brown");
        rotate(-1 * this.angle);
        rect( 0, 0,this.wallThickness, this.height);
        pop();

        push();
        translate(posB.x, posB.y);
        imageMode(CENTER);
        angleMode(RADIANS);
        //stroke(255);
        fill("brown");
        //rotate(-1 * this.angle);
        image(this.image, 0, -40, 200,120);
        pop();
    }



}