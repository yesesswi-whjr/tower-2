class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("block.png")
        World.add(world, this.body);
        this.Visiblity=255
      }
      display(){
      
  if(this.body.speed < 3){
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);   
          
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           image(this.image, this.body.position.x, this.body.position.y, 50, 50);
           pop();
         }
      }
}
