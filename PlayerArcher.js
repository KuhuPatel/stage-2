class PlayerArcher{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
          };
      
          this.body = Bodies.rectangle(690, y, width, height, options);
          this.width = width;
          this.height = height;
          this.image = loadImage("./assets/playerArcher.png");

          World.add(world, this.body);
         
          Matter.Body.setAngle(this.body,-PI/2);
         
       /*   if (keyIsDown(UP_ARROW) && playerArcher.body.angle > 1.77){
              angleValue = 0.1;
          } else{ 
              angleValue = -0.1;
        }
          if(keyIsDown(DOWN_ARROW) && playerArcher.body.angle > 1.47){
              angleValue = 0.1;
          } else{
               angleValue = -0.1;
        }*/
    }
    display(){
        var pos = this.body.position;
    var angle = this.body.angle;

    if (keyIsDown(DOWN_ARROW) && angle < -1.2) {
        angle += 0.01;
        Matter.Body.setAngle(this.body, angle);
      }
  
      if (keyIsDown(UP_ARROW) && angle > -1.9) {
        angle -= 0.01;
        Matter.Body.setAngle(this.body, angle);
      }

    push();
    translate(pos.x, pos.y);
    rotate(360);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);

    pop();

  

   



    }

   
}