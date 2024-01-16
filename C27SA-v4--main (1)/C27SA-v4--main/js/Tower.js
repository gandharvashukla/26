
class Tower {
    constructor(x, y, width, height) {
      var options = {
//set the static body(challenge 2)
      isStatic:true
      };
        //Load the image of the tower(challenge 5)
this.width = width;
    this.height = height;
      //write the instruction to create a rectangular tower body(challenge1)
      this.body=Bodies.rectangle(x,y,this.width,this.height,options);
      this.image=loadImage("./assets/tower.png");
      //add the option inside the rectangular body(challenge 2)
      //Add this object to the World(challenge 2)
      World.add(world,this.body)
    }
display() {
    var pos = this.body.position;
    var angle = this.body.angle;
   // push()
   // translate(pos.x, pos.y);
   // rotate(angle);
    imageMode(CENTER);
            //change the rect as image(challenge 5)




//display the rect function (challenge 3)
image (this.image,0,0,this.width,this.height);
  //pop();
  }
}
