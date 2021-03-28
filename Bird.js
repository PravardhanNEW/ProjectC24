class Bird extends BaseClass1{
  constructor(x,y){
    super(x,y,200,50);
    //this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}