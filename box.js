class Box{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    score(){
console.log("I'm into line no. 16 in box.js");
      if (this.Visiblity<0 && this.Visiblity>-1005) {
        score++;
      }
    }
    display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      if(this.body.speed < 3){
        
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }
      }
    }